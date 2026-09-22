import React, { useState, useRef, useEffect } from 'react';

export default function MatchingActivity({ 
  task, 
  currentStepIndex, 
  totalSteps, 
  onNext,
  selectedAnswer,
  setSelectedAnswer,
  quizFeedback,
  setQuizFeedback,
  onSubmit,
  isAlreadyCompleted = false
}) {
  const getInitialConnections = () => {
    if (isAlreadyCompleted && task?.pairs) {
      const conn = {};
      task.pairs.forEach((_, idx) => { conn[idx] = idx; });
      return conn;
    }
    return selectedAnswer || {};
  };

  const [connections, setConnections] = useState(getInitialConnections());
  const [activeTerm, setActiveTerm] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [verified, setVerified] = useState(isAlreadyCompleted);
  const [hasError, setHasError] = useState(false);
  const [explosions, setExplosions] = useState({});
  const containerRef = useRef(null);
  const termRefs = useRef({});
  const defRefs = useRef({});

  const [coords, setCoords] = useState({ terms: {}, defs: {} });

  const updateCoordinates = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    
    let newTerms = {};
    let newDefs = {};

    task.pairs.forEach((_, idx) => {
      if (termRefs.current[idx]) {
        const rect = termRefs.current[idx].getBoundingClientRect();
        newTerms[idx] = {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top
        };
      }
      if (defRefs.current[idx]) {
        const rect = defRefs.current[idx].getBoundingClientRect();
        newDefs[idx] = {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top
        };
      }
    });

    setCoords({ terms: newTerms, defs: newDefs });
  };

  useEffect(() => {
    updateCoordinates();
    window.addEventListener('resize', updateCoordinates);
    return () => window.removeEventListener('resize', updateCoordinates);
  }, [task]);

  const handleMouseMove = (e) => {
    if (activeTerm !== null && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top
      });
    }
  };

  const handleStartCable = (termIdx) => {
    if (isAlreadyCompleted || (verified && !hasError)) return;
    setActiveTerm(termIdx);
    if (coords.terms[termIdx]) {
      setMousePos(coords.terms[termIdx]);
    }
  };

  const handleConnectDef = (defIdx) => {
    if (activeTerm !== null && !isAlreadyCompleted) {
      const newConn = { ...connections, [activeTerm]: defIdx };
      
      if (hasError) {
        let newExplosions = { ...explosions };
        if (Number(activeTerm) === Number(defIdx)) {
          delete newExplosions[activeTerm];
        }
        setExplosions(newExplosions);
        const stillHasErrors = Object.keys(newExplosions).length > 0;
        setHasError(stillHasErrors);
      }

      setConnections(newConn);
      setSelectedAnswer(newConn);
      setActiveTerm(null);
      setTimeout(updateCoordinates, 50);
    }
  };

  const handleVerifyConnections = () => {
    let newExplosions = {};
    let errorFound = false;

    task.pairs.forEach((_, idx) => {
      if (Number(connections[idx]) !== Number(idx)) {
        newExplosions[idx] = true;
        errorFound = true;
      }
    });

    setExplosions(newExplosions);
    setHasError(errorFound);
    setVerified(true);
    setTimeout(updateCoordinates, 50);

    if (errorFound) {
      if (setQuizFeedback) setQuizFeedback('¡Cortocircuito! Revisa las conexiones marcadas en rojo.');
    } else {
      if (setQuizFeedback) setQuizFeedback('¡Correcto! Circuito completado con éxito ⚡');
      if (onSubmit) onSubmit(connections);
    }
  };

  const handleRetry = () => {
    let newConn = { ...connections };
    let newExplosions = {};

    Object.keys(explosions).forEach((termIdx) => {
      delete newConn[termIdx];
    });

    setVerified(false);
    setHasError(false);
    setExplosions(newExplosions);
    setConnections(newConn);
    setSelectedAnswer(newConn);
    if (setQuizFeedback) setQuizFeedback('');
    setTimeout(updateCoordinates, 50);
  };

  const allConnected = task.pairs.every((_, idx) => connections[idx] !== undefined);
  const isSuccessfullyCompleted = isAlreadyCompleted || (verified && !hasError);

  return (
    <div 
      ref={containerRef}
      className="matching-container relative select-none"
      onMouseMove={handleMouseMove}
      onClick={() => {
        // Si hace clic fuera de un conector mientras arrastra, cancela el cable actual
        if (activeTerm !== null) setActiveTerm(null);
      }}
    >
      <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full font-semibold border border-cyan-500/30 mb-4 inline-block">
        Paso {currentStepIndex + 1} de {totalSteps} • ¡Conecta el Circuito! ⚡
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
      <p className="text-slate-300 text-sm mb-6">{task.instruction}</p>

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
        {Object.entries(connections).map(([termIdx, defIdx]) => {
          const isCorrect = Number(termIdx) === Number(defIdx);
          const isExploding = explosions[termIdx];
          
          let strokeColor = '#a855f7'; 
          if (verified || isAlreadyCompleted) {
            strokeColor = (isCorrect && !isExploding) ? '#22c55e' : '#ef4444'; 
          }

          const start = coords.terms[termIdx];
          const end = coords.defs[defIdx];

          if (!start || !end) return null;

          return (
            <g key={termIdx}>
              <line 
                x1={start.x} y1={start.y} 
                x2={end.x} y2={end.y} 
                stroke={strokeColor} 
                strokeWidth="4" 
                strokeLinecap="round"
              />
            </g>
          );
        })}

        {activeTerm !== null && coords.terms[activeTerm] && !isAlreadyCompleted && (
          <g>
            <line 
              x1={coords.terms[activeTerm].x} y1={coords.terms[activeTerm].y} 
              x2={mousePos.x} y2={mousePos.y} 
              stroke="#eab308" 
              strokeWidth="4" 
              strokeDasharray="6,6"
              strokeLinecap="round"
              className="animate-pulse"
            />
          </g>
        )}
      </svg>

      <div className="grid grid-cols-2 gap-12 mb-8 relative z-0">
        <div className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Componentes</span>
          {task.pairs.map((pair, idx) => (
            <div 
              key={`term-${pair.id || idx}`}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 text-slate-200 text-sm font-medium flex items-center justify-between relative shadow-md"
            >
              <span>{pair.term}</span>
              <div 
                ref={el => termRefs.current[idx] = el}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStartCable(idx);
                }}
                className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all ${
                  isSuccessfullyCompleted ? 'bg-green-600 border-green-300 cursor-default' :
                  activeTerm === idx ? 'bg-amber-400 border-white scale-125 shadow-[0_0_10px_#facc15]' : 'bg-purple-600 border-purple-300 hover:scale-110 hover:bg-purple-500'
                }`}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Funciones</span>
          {task.pairs.map((pair, idx) => {
            const isExploding = Object.entries(connections).some(([tIdx, dIdx]) => Number(tIdx) === idx && explosions[idx]);
            
            return (
              <div 
                key={`def-${pair.id || idx}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleConnectDef(idx);
                }}
                className={`p-4 rounded-2xl border text-sm font-medium flex items-center justify-between transition-all relative ${
                  isSuccessfullyCompleted ? 'bg-slate-900/50 border-slate-700 text-slate-300' :
                  isExploding ? 'bg-red-500/20 border-red-500 text-red-300 cursor-pointer' : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-purple-500 cursor-pointer'
                }`}
              >
                <div 
                  ref={el => defRefs.current[idx] = el}
                  className={`w-3 h-3 rounded-full border border-slate-500 mr-2 ${
                    isSuccessfullyCompleted ? 'bg-green-500' :
                    Object.values(connections).includes(idx) ? 'bg-purple-500' : 'bg-slate-700'
                  }`}
                ></div>
                <span className="flex-1">{pair.definition}</span>
                {isExploding && <span className="text-xs font-bold text-red-400 ml-2 animate-pulse">💥 ¡Cortocircuito!</span>}
              </div>
            );
          })}
        </div>
      </div>

      {(quizFeedback || isAlreadyCompleted) && (
        <div className={`mb-6 p-4 rounded-xl text-sm font-semibold text-center ${
          hasError ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' : 'bg-green-500/20 text-green-300 border border-green-500/30'
        }`}>
          {quizFeedback || "¡Esta actividad ya fue superada correctamente 🤖!"}
        </div>
      )}

      <div className="flex justify-end gap-4">
        {isSuccessfullyCompleted ? (
          <button 
            onClick={onNext}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
          >
            Siguiente Nivel 🚀
          </button>
        ) : (
          <>
            {hasError && (
              <button 
                onClick={handleRetry}
                className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
              >
                Reintentar incorrectas 🔄
              </button>
            )}
            <button 
              onClick={handleVerifyConnections}
              disabled={!allConnected}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-sm shadow-lg transition-all flex items-center justify-center gap-2 ${
                !allConnected ? 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed opacity-50' : 'bg-purple-600 hover:bg-purple-500 text-white cursor-pointer'
              }`}
            >
              {allConnected ? 'Verificar Conexiones 🔌' : 'Conecta todos los cables para verificar'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}