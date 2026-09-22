import React, { useState, useRef } from 'react';
import { GripVertical } from 'lucide-react';

export default function CodeOrderActivity({ 
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
  const [lines, setLines] = useState(() => {
    if (isAlreadyCompleted && task?.lines) {
      if (task.validOrders && task.validOrders.length > 0) {
        const correctIds = task.validOrders[0];
        return correctIds.map(id => task.lines.find(l => l.id === id)).filter(Boolean);
      }
      return [...task.lines];
    }
    if (selectedAnswer && Array.isArray(selectedAnswer) && selectedAnswer.length > 0) {
      return selectedAnswer;
    }
    return [...task.lines].sort(() => Math.random() - 0.5);
  });
  
  const [verified, setVerified] = useState(isAlreadyCompleted);
  const [hasError, setHasError] = useState(false);

  const [draggingId, setDraggingId] = useState(null);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [dropIndex, setDropIndex] = useState(null);
  
  const dragElementRef = useRef(null);
  const containerRef = useRef(null);

  const handlePointerDown = (e, id) => {
    if (isAlreadyCompleted || (verified && !hasError)) return;
    e.preventDefault();
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setPointerOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setDragPosition({
      x: rect.left - containerRect.left,
      y: rect.top - containerRect.top,
    });

    const currentIndex = lines.findIndex(item => item.id === id);
    setDraggingId(id);
    setDropIndex(currentIndex);
    
    if (verified) {
      setVerified(false);
      setHasError(false);
      if (setQuizFeedback) setQuizFeedback('');
    }
    
    element.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (draggingId === null || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let newX = e.clientX - containerRect.left - pointerOffset.x;
    let newY = e.clientY - containerRect.top - pointerOffset.y;

    setDragPosition({ x: newX, y: newY });

    const cardElements = containerRef.current.querySelectorAll('.code-card-item');
    let targetIndex = lines.length;

    for (let i = 0; i < cardElements.length; i++) {
      const card = cardElements[i];
      if (card.dataset.id === String(draggingId)) continue;

      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;

      if (e.clientY < cardCenter) {
        targetIndex = lines.findIndex(item => item.id === Number(card.dataset.id));
        break;
      }
    }

    setDropIndex(targetIndex);
  };

  const handlePointerUp = (e) => {
    if (draggingId === null) return;
    
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    if (dropIndex !== null) {
      setLines(prevLines => {
        const newLines = [...prevLines];
        const draggedIndex = newLines.findIndex(item => item.id === draggingId);
        if (draggedIndex === -1) return prevLines;
        
        const [movedItem] = newLines.splice(draggedIndex, 1);
        newLines.splice(dropIndex, 0, movedItem);
        
        if (setSelectedAnswer) setSelectedAnswer(newLines);
        
        return newLines;
      });
    }

    setDraggingId(null);
    setDropIndex(null);
  };

  const handleVerifyOrder = () => {
    const currentOrderIds = lines.map(line => line.id);
    const validOrders = task.validOrders || [task.correctOrder];
    
    const isCorrect = validOrders.some(validOrder => JSON.stringify(currentOrderIds) === JSON.stringify(validOrder));

    setVerified(true);

    if (isCorrect) {
      setHasError(false);
      if (setQuizFeedback) setQuizFeedback('¡Excelente! El código está ordenado correctamente 🤖✨');
      if (onSubmit) onSubmit(); 
    } else {
      setHasError(true);
      if (setQuizFeedback) setQuizFeedback('Hay bloques mal ubicados. ¡Arrástralos para corregirlos! 🔴');
    }
  };

  const getDraggedStyle = (id) => {
    if (draggingId !== id) return {};
    return {
      position: 'absolute',
      left: `${dragPosition.x}px`,
      top: `${dragPosition.y}px`,
      width: '95%',
      zIndex: 1000,
      pointerEvents: 'none',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
      transform: 'rotate(1.5deg)',
    };
  };

  const isLineIncorrect = (line, index) => {
    if (!verified || !hasError || isAlreadyCompleted) return false;
    const validOrders = task.validOrders || [task.correctOrder];
    const belongsHere = validOrders.some(validOrder => validOrder[index] === line.id);
    return !belongsHere;
  };

  return (
    <div className="bg-slate-800/90 border border-slate-700/80 p-6 rounded-3xl shadow-xl max-w-xl mx-auto text-white relative">
      <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full font-semibold border border-purple-500/30 mb-4 inline-block">
        Paso {currentStepIndex + 1} de {totalSteps} • ¡Ordena el Código! 🧩
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
      <p className="text-slate-300 text-sm mb-6">{task.instruction || task.subtitle}</p>

      <div 
        ref={containerRef}
        onPointerMove={handlePointerMove}
        className="space-y-2 mb-6 relative min-h-[250px]" 
      >
        {lines.map((line, index) => {
          const isDragging = draggingId === line.id;
          const isBeingDraggedSomewhere = draggingId !== null;
          const showIndicator = isBeingDraggedSomewhere && dropIndex === index && !isDragging;
          const incorrect = isLineIncorrect(line, index);

          return (
            <React.Fragment key={line.id}>
              {showIndicator && (
                <div className="h-1.5 bg-purple-500 rounded-full shadow-[0_0_12px_#a855f7] my-1 animate-pulse" />
              )}

              <div 
                data-id={line.id}
                ref={isDragging ? dragElementRef : null}
                onPointerDown={(e) => handlePointerDown(e, line.id)}
                onPointerUp={handlePointerUp}
                style={getDraggedStyle(line.id)}
                className={`code-card-item flex items-center justify-between p-3.5 rounded-2xl font-mono text-sm shadow-inner select-none border transition-colors duration-200 ${
                  isAlreadyCompleted || (verified && !hasError) ? 'cursor-default' : 'cursor-grab'
                } ${
                  isDragging
                    ? 'bg-purple-950 border-purple-400' 
                    : incorrect
                      ? 'bg-red-950/80 border-red-500 text-red-200 shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                      : isAlreadyCompleted || (verified && !hasError)
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                        : 'bg-slate-950 border-slate-700/80 hover:border-purple-500/50'
                } ${
                   isBeingDraggedSomewhere && !isDragging ? 'opacity-40' : 'opacity-100'
                }`}
              >
                <span className="pointer-events-none">{line.text}</span>
                <div className="flex items-center gap-1 text-slate-500 pointer-events-none">
                  {incorrect && <span className="text-xs text-red-400 font-bold mr-2">❌ Mal ubicado</span>}
                  <GripVertical className="w-5 h-5" />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {(quizFeedback || isAlreadyCompleted) && (
        <div className={`mb-6 p-4 rounded-xl text-sm font-semibold text-center ${
          hasError ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' : 'bg-green-500/20 text-green-300 border border-green-500/30'
        }`}>
          {quizFeedback || "¡Esta actividad ya fue superada correctamente 🤖!"}
        </div>
      )}
      <div className="flex justify-end gap-4">
        {isAlreadyCompleted || (verified && !hasError) ? (
          <button 
            onClick={onNext}
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
          >
            Siguiente Nivel 🚀
          </button>
        ) : (
          <button 
            onClick={handleVerifyOrder}
            className="px-6 py-3 rounded-xl font-semibold text-sm shadow-lg transition-all flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white cursor-pointer"
          >
            Verificar Código 💻
          </button>
        )}
      </div>
    </div>
  );
}