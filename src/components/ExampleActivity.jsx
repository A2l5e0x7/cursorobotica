import React from 'react';

export default function ExampleActivity({ 
  task, 
  currentStepIndex, 
  totalSteps, 
  onNext,
  onSubmit,
  isAlreadyCompleted = false
}) {
  const handleContinue = () => {
    if (!isAlreadyCompleted && onSubmit) {
      onSubmit();
    }
    if (onNext) {
      onNext();
    }
  };

  return (
    <div>
      <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full font-semibold border border-cyan-500/30 mb-4 inline-block">
        Paso {currentStepIndex + 1} de {totalSteps} • Caso Práctico 💻
      </span>
      
      <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
      <p className="text-slate-300 text-sm mb-6">{task.instruction || task.subtitle}</p>

      {/* Tarjeta del Caso Práctico */}
      <div className="mb-8 bg-slate-950/90 border border-cyan-500/30 rounded-2xl p-5 shadow-xl relative overflow-hidden space-y-4">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Simulación de Código / Implementación
        </div>

        {/* Si la tarea incluye una imagen, se renderiza aquí */}
        {task.image && (
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 flex justify-center p-2">
            <img 
              src={task.image} 
              alt="Ilustración del ejemplo práctico" 
              className="max-h-64 object-contain rounded-lg"
            />
          </div>
        )}

        {/* Si la tarea incluye fragmento de código */}
        {task.codeSnippet && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner">
            <pre>{task.codeSnippet}</pre>
          </div>
        )}

        {/* Explicación del ejemplo */}
        {task.explanation && (
          <div className="text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 pt-3">
            <p>{task.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button 
          onClick={handleContinue}
          className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
        >
          {isAlreadyCompleted ? 'Siguiente Nivel 🚀' : 'Entendido, Siguiente Nivel 🚀'}
        </button>
      </div>
    </div>
  );
}