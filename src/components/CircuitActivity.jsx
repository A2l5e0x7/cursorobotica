import React, { useMemo, useRef, useState } from 'react';
import { layoutTask, evaluate, solutionWires, wireColor, wirePath } from './circuit/circuitLogic';
import { drawBoard, drawPart } from './circuit/circuitParts';

const isValidWires = (value) =>
  Array.isArray(value) &&
  value.every((w) => Array.isArray(w) && w.length === 2 && typeof w[0] === 'string' && typeof w[1] === 'string');

export function CircuitCanvas({
  layout,
  unoPins,
  wires,
  active = null,
  mouse = { x: 0, y: 0 },
  burned = new Set(),
  wrongWires = new Set(),
  missingTerminals = new Set(),
  unoShort = false,
  success = false,
  locked = false,
  svgRef,
  onPointerMove,
  onBackgroundClick,
  onTerminal = () => undefined,
  onRemoveWire = () => undefined,
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-600 shadow-inner" style={{ background: '#e6edf3' }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        width="100%"
        style={{ display: 'block', touchAction: 'manipulation' }}
        onPointerMove={onPointerMove}
        onClick={onBackgroundClick}
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#cfd9e3" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={layout.width} height={layout.height} fill="url(#grid)" />

        {drawBoard(React.createElement, unoPins, { short: unoShort })}

        {layout.parts.map((p) => (
          <g key={p.id} transform={`translate(${p.cx} ${p.cy})`}>
            {drawPart(React.createElement, p, { lit: !!success, burned: burned.has(p.id) })}
          </g>
        ))}

        {wires.map(([a, b], i) => {
          const p1 = layout.terminals[a];
          const p2 = layout.terminals[b];
          if (!p1 || !p2) return null;
          const d = wirePath(p1, p2);
          const bad = wrongWires.has(i);
          return (
            <g key={`${a}-${b}`}>
              <path d={d} fill="none" stroke="#000" strokeOpacity="0.25" strokeWidth="8" strokeLinecap="round" />
              <path
                d={d}
                fill="none"
                stroke={bad ? '#ff2d55' : wireColor(a, b, i)}
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={bad ? '10 8' : undefined}
                className={bad ? 'animate-pulse' : undefined}
              />
              {!locked && (
                <path
                  d={d}
                  fill="none"
                  stroke="transparent"
                  strokeWidth="16"
                  style={{ cursor: 'pointer' }}
                  onClick={onRemoveWire(i)}
                >
                  <title>Clic para quitar este cable</title>
                </path>
              )}
            </g>
          );
        })}

        {active !== null && layout.terminals[active] && (
          <path
            d={wirePath(layout.terminals[active], { x: mouse.x, y: mouse.y })}
            fill="none"
            stroke="#eab308"
            strokeWidth="4"
            strokeDasharray="7 7"
            strokeLinecap="round"
            pointerEvents="none"
          />
        )}

        {Object.entries(layout.terminals).map(([id, t]) => {
          const isActive = active === id;
          const isMissing = missingTerminals.has(id);
          const inUse = wires.some(([a, b]) => a === id || b === id);
          return (
            <g key={id}>
              {isMissing && (
                <circle cx={t.x} cy={t.y} r="11" fill="none" stroke="#f59e0b" strokeWidth="3" className="animate-pulse" pointerEvents="none" />
              )}
              <circle
                cx={t.x}
                cy={t.y}
                r={isActive ? 7 : 4.5}
                fill={isActive ? '#facc15' : inUse ? '#fde68a' : '#f8fafc'}
                stroke="#334155"
                strokeWidth="1.5"
                pointerEvents="none"
              />
              <circle
                cx={t.x}
                cy={t.y}
                r="8"
                fill="transparent"
                style={{ cursor: locked ? 'default' : 'crosshair' }}
                onClick={onTerminal(id)}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function CircuitActivity({
  task,
  currentStepIndex,
  totalSteps,
  onNext,
  selectedAnswer,
  setSelectedAnswer,
  onSubmit,
  isAlreadyCompleted = false,
}) {
  const layout = useMemo(() => layoutTask(task), [task]);
  const unoPinsList = useMemo(
    () => Object.entries(layout.terminals).filter(([, t]) => t.part === 'uno').map(([id, t]) => ({ id, ...t })),
    [layout]
  );

  const [wires, setWires] = useState(() => {
    if (isAlreadyCompleted) return solutionWires(task);
    return isValidWires(selectedAnswer) ? selectedAnswer : [];
  });
  const [active, setActive] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [result, setResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const svgRef = useRef(null);

  const success = isAlreadyCompleted || (result && result.ok);
  const locked = !!success;
  const failed = result && !result.ok;

  const pointerToSvg = (e) => {
    const svg = svgRef.current;
    if (!svg || !svg.createSVGPoint) return { x: 0, y: 0 };
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const m = svg.getScreenCTM();
    return m ? pt.matrixTransform(m.inverse()) : { x: 0, y: 0 };
  };

  const updateWires = (next) => {
    setWires(next);
    if (setSelectedAnswer) setSelectedAnswer(next);
    setResult(null);
  };

  const handleTerminal = (id) => (e) => {
    e.stopPropagation();
    if (locked) return;
    if (active === null) {
      setActive(id);
      setMouse(pointerToSvg(e));
      return;
    }
    if (active === id) {
      setActive(null);
      return;
    }
    const exists = wires.some(([a, b]) => (a === active && b === id) || (a === id && b === active));
    if (!exists) updateWires([...wires, [active, id]]);
    setActive(null);
  };

  const removeWire = (index) => (e) => {
    e.stopPropagation();
    if (locked || active !== null) return;
    updateWires(wires.filter((_, i) => i !== index));
  };

  const handleVerify = () => {
    setActive(null);
    const r = evaluate(task, wires);
    setResult(r);
    if (r.ok && !isAlreadyCompleted && onSubmit) onSubmit(wires);
  };

  const handleRetry = () => {
    if (!result) return;
    const wrong = new Set(result.wrong);
    updateWires(wires.filter((_, i) => !wrong.has(i)));
  };

  const burned = new Set(failed ? result.burned : []);
  const wrongWires = new Set(failed ? result.wrong : []);
  const missingTerminals = new Set(failed ? result.missingTerminals : []);

  let message = null;
  if (success) {
    message = task.success || '¡Circuito correcto! Todo funciona ⚡';
  } else if (failed) {
    if (result.burned.length > 0 || result.unoShort) {
      message = `💥 ¡Algo se quemó! Revisa las conexiones con línea punteada. ${task.failTip || ''}`;
    } else {
      message = 'Todavía faltan conexiones: el circuito aún no funciona. Busca los puntos que brillan en amarillo.';
    }
  }

  return (
    <div className="select-none">
      <span className="bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full font-semibold border border-orange-500/30 mb-4 inline-block">
        Paso {currentStepIndex + 1} de {totalSteps} • Arma el Circuito 🔧
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
      <p className="text-slate-300 text-sm mb-4">{task.instruction}</p>

      <CircuitCanvas
        layout={layout}
        unoPins={unoPinsList}
        wires={wires}
        active={active}
        mouse={mouse}
        burned={burned}
        wrongWires={wrongWires}
        missingTerminals={missingTerminals}
        unoShort={!!(failed && result.unoShort)}
        success={!!success}
        locked={locked}
        svgRef={svgRef}
        onPointerMove={(e) => { if (active !== null) setMouse(pointerToSvg(e)); }}
        onBackgroundClick={() => setActive(null)}
        onTerminal={handleTerminal}
        onRemoveWire={removeWire}
      />

      <p className="text-slate-400 text-xs mt-2 mb-4">
        Haz clic en un punto y luego en otro para unirlos con un cable. Clic sobre un cable para quitarlo.
      </p>

      {task.hint && !success && (
        <div className="mb-4">
          <button
            onClick={() => setShowHint((v) => !v)}
            className="text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-lg cursor-pointer"
          >
            💡 {showHint ? 'Ocultar pista' : 'Ver pista'}
          </button>
          {showHint && <p className="text-amber-200 text-sm mt-2">{task.hint}</p>}
        </div>
      )}

      {message && (
        <div
          className={`mb-4 p-4 rounded-xl text-sm font-semibold text-center ${
            success
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
          }`}
        >
          {message}
        </div>
      )}

      <div className="flex flex-col gap-3">
        {success ? (
          <button
            onClick={onNext}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
          >
            Siguiente Nivel 🚀
          </button>
        ) : (
          <>
            <div className="flex gap-3">
              <button
                onClick={() => updateWires(wires.slice(0, -1))}
                disabled={wires.length === 0}
                className="flex-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-40 text-white font-semibold py-2.5 rounded-xl text-sm cursor-pointer"
              >
                Deshacer ↩
              </button>
              <button
                onClick={() => updateWires([])}
                disabled={wires.length === 0}
                className="flex-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-40 text-white font-semibold py-2.5 rounded-xl text-sm cursor-pointer"
              >
                Borrar todo 🗑
              </button>
              {failed && result.wrong.length > 0 && (
                <button
                  onClick={handleRetry}
                  className="flex-1 bg-amber-600 hover:bg-amber-500 text-white font-semibold py-2.5 rounded-xl text-sm cursor-pointer"
                >
                  Quitar incorrectos 🔄
                </button>
              )}
            </div>
            <button
              onClick={handleVerify}
              disabled={wires.length === 0}
              className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
            >
              {wires.length === 0 ? 'Conecta al menos un cable' : 'Encender circuito ⚡'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
