import React from 'react';

export default function TheoryActivity({ 
  task, 
  currentStepIndex, 
  totalSteps, 
  onNext 
}) {
  return (
    <div>
      <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full font-semibold border border-purple-500/30 mb-4 inline-block">
        Paso {currentStepIndex + 1} de {totalSteps} • Teoría / Concepto
      </span>
      
      <h4 className="text-xl font-extrabold text-white mb-4">
        {task.title || "Introducción teórica"}
      </h4>
      
      {/* Contenido de la teoría (soporta saltos de línea y texto explicativo) */}
      <div className="text-slate-300 text-base leading-relaxed space-y-4 mb-8 bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
        {task.content || task.text || task.description || "Lee atentamente la información antes de continuar con los retos."}
      </div>

      {/* Botón para avanzar al siguiente paso */}
      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
        >
          Siguiente paso ➔
        </button>
      </div>
    </div>
  );
}