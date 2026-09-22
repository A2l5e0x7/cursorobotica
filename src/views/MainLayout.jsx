import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, LogOut, Bot, ChevronRight, ArrowLeft, Lock } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { modulesData } from '../data/activitiesData';
import TheoryActivity from '../components/TheoryActivity';
import QuizActivity from '../components/QuizActivity';
import MatchingActivity from '../components/MatchingActivity';
import { saveActivityProgress } from '../utils/progressService';
import ExampleActivity from '../components/ExampleActivity'; // O la ruta correcta donde tengas guardado tu archivo
import CodeOrderActivity from '../components/CodeOrderActivity';
export default function MainLayout({ currentUser, setIsLoggedIn, userProgress, refreshGlobalProgress }) {
  const [selectedModuleId, setSelectedModuleId] = useState(1);
  const [completedLessons, setCompletedLessons] = useState([]);

  const [currentView, setCurrentView] = useState('dashboard'); 
  const [activeLesson, setActiveLesson] = useState(null);

  const [currentStepIndex, setCurrentStepIndex] = useState(0); 
  const [completedSteps, setCompletedSteps] = useState({}); 
  const [lessonAnswers, setLessonAnswers] = useState({}); 
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFeedback, setQuizFeedback] = useState('');
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);

  useEffect(() => {
    if (currentUser) {
      fetchProgress(currentUser.id);
    }
  }, [currentUser]);

  useEffect(() => {
    let interval = null;
    if (isLockedOut && lockTimer > 0) {
      interval = setInterval(() => {
        setLockTimer(prev => prev - 1);
      }, 1000);
    } else if (lockTimer === 0) {
      setIsLockedOut(false);
    }
    return () => clearInterval(interval);
  }, [isLockedOut, lockTimer]);

const fetchProgress = async (userId) => {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId);

  if (data && !error) {
    setCompletedLessons(data); 
  }
};

  const markLessonAsCompleted = async (lessonId) => {
    if (!currentUser) return;

    const progressPayload = { 
      user_id: currentUser.id, 
      module_id: Number(selectedModuleId), 
      lesson_id: Number(lessonId), 
      completed: true 
    };

    const { error } = await supabase
      .from('user_progress')
      .upsert([progressPayload], { onConflict: 'user_id,module_id,lesson_id' });

    if (!error) {
      setCompletedLessons(prev => [
        ...prev.filter(p => !(Number(p.module_id) === Number(selectedModuleId) && Number(p.lesson_id) === Number(lessonId))),
        progressPayload
      ]);
    }
  };

  const currentModule = modulesData.find(m => m.id === selectedModuleId) || modulesData[0];

  const isLessonCompleted = (lessonId) => {
    return completedLessons.some(
      p => Number(p.module_id) === Number(selectedModuleId) && Number(p.lesson_id) === Number(lessonId) && p.completed === true
    );
  };

  const isModuleUnlocked = (moduleId) => {
    if (moduleId === 1) return true;
    const prevModule = modulesData.find(m => m.id === moduleId - 1);
    if (!prevModule) return false;

    return prevModule.lessons.every(lesson => 
      completedLessons.some(
        p => Number(p.module_id) === Number(prevModule.id) && Number(p.lesson_id) === Number(lesson.id) && p.completed === true
      )
    );
  };

const openLessonView = async (lesson) => {
    if (!currentUser) return;
    setActiveLesson(lesson);
    setCurrentStepIndex(0);
    
    let initialCompleted = {};
    let savedAnswers = {};

    const { data, error } = await supabase
      .from('user_progress')
      .select('completed, steps_completed, answers_data')
      .eq('user_id', currentUser.id)
      .eq('module_id', Number(selectedModuleId))
      .eq('lesson_id', Number(lesson.id))
      .maybeSingle();

    if (data && !error) {
      if (data.completed) {
        lesson.tasks?.forEach((_, idx) => {
          initialCompleted[idx] = true;
        });
      } else if (data.steps_completed && Array.isArray(data.steps_completed)) {
        data.steps_completed.forEach(idx => {
          initialCompleted[idx] = true;
        });
      }
      if (data.answers_data) {
        savedAnswers = data.answers_data;
      }
    }

    setCompletedSteps(initialCompleted);
    setLessonAnswers(savedAnswers);

    if (savedAnswers[0] !== undefined) {
      setSelectedAnswer(savedAnswers[0]);
      setQuizFeedback('¡Esta actividad ya fue superada correctamente 🤖!');
    } else {
      setSelectedAnswer(null);
      setQuizFeedback('');
    }

    setIsLockedOut(false);
    setCurrentView('lesson');
  };

  const handleNextStep = async () => {
    const updatedCompletedState = { ...completedSteps, [currentStepIndex]: true };
    setCompletedSteps(updatedCompletedState);

    const completedIndicesArray = Object.keys(updatedCompletedState)
      .filter(key => updatedCompletedState[key])
      .map(Number);

    const isFinished = activeLesson.tasks && currentStepIndex >= activeLesson.tasks.length - 1;

    if (currentUser && activeLesson) {
      const progressPayload = { 
        user_id: currentUser.id, 
        module_id: Number(selectedModuleId), 
        lesson_id: Number(activeLesson.id), 
        completed: isFinished ? true : isLessonCompleted(activeLesson.id),
        steps_completed: completedIndicesArray
      };

      const { error } = await supabase
        .from('user_progress')
        .upsert([progressPayload], { onConflict: 'user_id,module_id,lesson_id' });

      if (!error) {
        if (isFinished) {
          setCompletedLessons(prev => [
            ...prev.filter(p => !(Number(p.module_id) === Number(selectedModuleId) && Number(p.lesson_id) === Number(activeLesson.id))),
            progressPayload
          ]);
        }
      }
    }

    if (!isFinished && activeLesson.tasks) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setSelectedAnswer(null);
      setQuizFeedback('');
      setIsLockedOut(false);
    } else {
      setCurrentView('dashboard');
    }
  };

const jumpToStep = (index) => {
    const isDone = isLessonCompleted(activeLesson.id);
    const isUnlocked = isDone || index === 0 || completedSteps[index] || completedSteps[index - 1];

    if (isUnlocked) {
      setCurrentStepIndex(index);
      setIsLockedOut(false);
      setLockTimer(0);

      if (lessonAnswers[index] !== undefined) {
        setSelectedAnswer(lessonAnswers[index]);
        setQuizFeedback('¡Esta actividad ya fue superada correctamente 🤖!');
      } else {
        setSelectedAnswer(null);
        setQuizFeedback('');
      }
    }
  };
const handleQuizSubmit = async (correctAnswer) => {
  if (selectedAnswer !== null && Number(selectedAnswer) === Number(correctAnswer)) {
    
    const result = await saveActivityProgress({
      currentUser,
      selectedModuleId,
      activeLesson,
      currentStepIndex,
      completedSteps,
      lessonAnswers,
      selectedAnswer,
      successMessage: '¡Correcto! Respuesta guardada 🤖'
    });

    if (result.success) {
      setCompletedSteps(result.updatedCompleted);
      setLessonAnswers(result.updatedAnswers);
      setQuizFeedback(result.feedback);
      
      if (result.isCompleted) {
        await fetchProgress(currentUser.id); 
      }
    }
  } else {
    setQuizFeedback('Incorrecto. Inténtalo de nuevo.');
    setIsLockedOut(true);
    setLockTimer(3);
    
    const timer = setInterval(() => {
      setLockTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsLockedOut(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }
};

const handleMatchingSubmit = async () => {
  const result = await saveActivityProgress({
    currentUser,
    selectedModuleId,
    activeLesson,
    currentStepIndex,
    completedSteps,
    lessonAnswers,
    selectedAnswer,
    successMessage: '¡Correcto! Circuito completado con éxito ⚡'
  });

  if (result.success) {
    setCompletedSteps(result.updatedCompleted);
    setLessonAnswers(result.updatedAnswers);
    setQuizFeedback(result.feedback);
    
    if (result.isCompleted) {
      await fetchProgress(currentUser.id);
    }
  }
};
const handleCodeOrderSubmit = async () => {
  console.log("💾 [MainLayout] Ejecutando handleCodeOrderSubmit para el paso:", currentStepIndex);
  console.log("📦 [MainLayout] selectedAnswer actual a guardar:", selectedAnswer);

  const result = await saveActivityProgress({
    currentUser,
    selectedModuleId,
    activeLesson,
    currentStepIndex,
    completedSteps,
    lessonAnswers,
    selectedAnswer,
    successMessage: '¡Excelente! El código está ordenado correctamente 🤖✨'
  });

  console.log("📡 [MainLayout] Respuesta de saveActivityProgress:", result);

  if (result.success) {
    setCompletedSteps(result.updatedCompleted);
    setLessonAnswers(result.updatedAnswers);
    setQuizFeedback(result.feedback);
    
    if (result.isCompleted) {
      await fetchProgress(currentUser.id);
    }
  } else {
    console.error("⚠️ [MainLayout] Error al guardar en Supabase:", result.error);
  }
};
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col">
      <header className="bg-slate-800 border-b border-blue-900 px-2 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-800 rounded-xl flex items-center justify-center shadow-md">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold flex items-center gap-2">
              ¡Hola, <span className="text-purple-600">{currentUser?.username}</span>! 🤖
            </h1>
            <p className="text-slate-400 text-xs">Academia de Robótica y Código</p>
          </div>
        </div>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-xl text-xs font-medium transition-all border border-red-500/30 cursor-pointer"
        >
          <LogOut className="w-4 h-4" /> Salir
        </button>
      </header>

      {currentView === 'dashboard' ? (
        <div className="flex flex-1 h-[calc(100vh-73px)] overflow-hidden">
          <aside className="w-80 flex-shrink-0 bg-slate-800/60 border-r border-blue-900 p-6 overflow-y-auto flex flex-col gap-3">
           <h2 className="font-bold text-xs tracking-wider uppercase mb-2 flex items-center gap-2 !text-slate-300">
  <BookOpen className="w-4 h-4 text-purple-400" /> Módulos del Curso
</h2>

{modulesData.map((mod) => {
              const isSelected = selectedModuleId === mod.id;
              const unlocked = isModuleUnlocked(mod.id);
              
              const isFinished = completedLessons.some(
                (item) => Number(item.module_id) === Number(mod.id) && item.completed
              );

              return (
                <button
                  key={mod.id}
                  onClick={() => { if (unlocked) setSelectedModuleId(mod.id); }}
                  disabled={!unlocked}
                  className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between ${
                    !unlocked 
                      ? 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-60 cursor-not-allowed' 
                      : isFinished
                        ? 'bg-emerald-600/20 border-emerald-500/80 text-emerald-100 shadow-lg cursor-pointer' 
                        : isSelected 
                          ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg cursor-pointer' 
                          : 'bg-slate-800/80 border-slate-700/80 text-slate-400 hover:bg-slate-700/50 hover:text-slate-200 cursor-pointer'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm flex items-center gap-2">
                      {mod.title}
                      
                      {}
{isFinished ? (
                        <span className="text-emerald-400 text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 inline-flex items-center gap-1.5 whitespace-nowrap">
                          <span>Completado</span>
                          <span>✓</span>
                        </span>
                      ) : !unlocked ? (
                        <Lock className="w-3.5 h-3.5 text-slate-500" />
                      ) : null}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {isFinished ? '¡Módulo superado!' : unlocked ? mod.description : 'Completa el módulo anterior'}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isFinished ? 'text-emerald-400' : isSelected ? 'text-purple-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </aside>

          <main className="flex-1 bg-slate-900 p-10 overflow-y-auto">
            <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl">
              <div className="border-b border-slate-700 pb-4 mb-8">
                <h2 className="text-2xl font-extrabold !text-slate-300 mb-1">{currentModule.title}</h2>
                <p className="text-slate-400 text-sm">{currentModule.description}</p>
              </div>

              <div className="space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Lecciones Disponibles
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {currentModule.lessons.map((lesson, idx) => {
                    const isDone = isLessonCompleted(lesson.id);

                    return (
                      <div 
                        key={lesson.id}
                        onClick={() => openLessonView(lesson)}
                        className="p-6 rounded-3xl flex items-center gap-5 transition-all shadow-md relative group bg-slate-900/60 border border-slate-700 hover:border-purple-500 cursor-pointer hover:scale-[1.02]"
                      >
                        {isDone && (
                          <span className="absolute top-4 right-4 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                            <CheckCircle className="w-3.5 h-3.5 text-white" />
                          </span>
                        )}
                        
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-xl shadow-inner flex-shrink-0 bg-purple-600 text-white">
                          {idx + 1}
                        </div>

                        <div className="overflow-hidden">
                          <span className="text-xs font-bold text-blue-400 tracking-wider uppercase block mb-0.5">
                            {lesson.title}
                          </span>
                          <h4 className="text-sm font-bold truncate text-slate-200 group-hover:text-white">
                            {lesson.tasks?.[0]?.title || lesson.description || "Lección interactiva"}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">
                            {lesson.tasks?.length || 0} actividades
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="flex-1 bg-slate-900 flex flex-col h-[calc(100vh-73px)] overflow-hidden">
          <div className="bg-slate-800 border-b border-slate-700 px-6 py-3 flex items-center justify-between shadow-sm">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center gap-2 text-slate-400 hover:text-white text-xs font-semibold bg-slate-700/50 px-3 py-2 rounded-xl transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al Menú
            </button>

            {/* Barra de indicadores de pasos */}
            <div className="flex items-center gap-2">
              {activeLesson.tasks && activeLesson.tasks.map((step, idx) => {
  const isCurrent = idx === currentStepIndex;
  const isDone = completedSteps[idx];
  
  const isUnlocked = isDone || isCurrent || idx === 0 || completedSteps[idx - 1];
  
  return (
    <button
      key={step.id || idx}
      onClick={() => jumpToStep(idx)}
      disabled={!isUnlocked}
      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
        isCurrent 
          ? 'bg-purple-500 text-white ring-2 ring-white/50 cursor-pointer' 
          : isDone 
            ? 'bg-green-600 text-white cursor-pointer hover:scale-110' 
            : isUnlocked
              ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 cursor-pointer' 
              : 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed opacity-60'
      }`}
    >
      {idx + 1}
    </button>
  );
})}
            </div>

           <div style={{ color: '#ffffff' }} className="text-xs font-semibold hidden sm:block">
  {activeLesson.title}
</div>
          </div>

          <div className="flex-1 p-8 overflow-y-auto flex items-center justify-center">
            <div className="max-w-2xl w-full bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl">
              
<div className="p-6">
  { !activeLesson.tasks || activeLesson.tasks.length === 0 ? (
    <div className="text-center py-10">
      <h3 className="text-xl font-bold text-amber-400 mb-2">¡Ups! Sin actividades</h3>
      <button onClick={() => setCurrentView('dashboard')} className="mt-4 bg-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold cursor-pointer">
        Regresar
      </button>
    </div>
  ) : activeLesson.tasks[currentStepIndex]?.type === 'theory' ? (
    <TheoryActivity 
      task={activeLesson.tasks[currentStepIndex]} 
      currentStepIndex={currentStepIndex} 
      totalSteps={activeLesson.tasks.length} 
      onNext={handleNextStep} 
    />
  ) : activeLesson.tasks[currentStepIndex]?.type === 'quiz' ? (
    <QuizActivity 
      task={activeLesson.tasks[currentStepIndex]} 
      currentStepIndex={currentStepIndex} 
      totalSteps={activeLesson.tasks.length} 
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      isLockedOut={isLockedOut}
      lockTimer={lockTimer}
      quizFeedback={quizFeedback}
      onSubmit={() => handleQuizSubmit(activeLesson.tasks[currentStepIndex].correct ?? activeLesson.tasks[currentStepIndex].correct)} 
      onNext={handleNextStep} 
      isAlreadyCompleted={!!completedSteps[currentStepIndex]}
    />
  ) : activeLesson.tasks[currentStepIndex]?.type === 'matching' ? (
    <MatchingActivity 
      task={activeLesson.tasks[currentStepIndex]}
      currentStepIndex={currentStepIndex}
      totalSteps={activeLesson.tasks.length}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      quizFeedback={quizFeedback}
      setQuizFeedback={setQuizFeedback}
      onSubmit={() => handleMatchingSubmit(currentStepIndex)} 
      onNext={handleNextStep}
      isAlreadyCompleted={!!completedSteps[currentStepIndex]}
    />
  ) : activeLesson.tasks[currentStepIndex]?.type === 'example' ? (
    <ExampleActivity 
      task={activeLesson.tasks[currentStepIndex]}
      currentStepIndex={currentStepIndex}
      totalSteps={activeLesson.tasks.length}
      onNext={handleNextStep}
    />
  ) : activeLesson.tasks[currentStepIndex]?.type === 'code_order' ? (
<CodeOrderActivity 
    task={activeLesson.tasks[currentStepIndex]}
    currentStepIndex={currentStepIndex}
    totalSteps={activeLesson.tasks.length}
    onNext={handleNextStep}
    selectedAnswer={selectedAnswer}
    setSelectedAnswer={setSelectedAnswer}
    quizFeedback={quizFeedback}
    setQuizFeedback={setQuizFeedback}
    onSubmit={() => handleCodeOrderSubmit(currentStepIndex)}
    isAlreadyCompleted={!!completedSteps[currentStepIndex]}
  />
) : (
    <div className="text-white">Tipo de actividad no soportado</div>
  )}
</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}