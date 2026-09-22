import { supabase } from '../supabaseClient';

export async function saveActivityProgress({
  currentUser,
  selectedModuleId,
  activeLesson,
  currentStepIndex,
  completedSteps,
  lessonAnswers,
  selectedAnswer,
  successMessage = '¡Actividad superada con éxito 🤖!'
}) {
  if (!currentUser || !activeLesson) {
    console.warn("Faltan datos de usuario o lección activa.");
    return { success: false };
  }

  const updatedCompleted = { ...completedSteps, [currentStepIndex]: true };
  const updatedAnswers = { ...lessonAnswers, [currentStepIndex]: selectedAnswer };

  const stepsArray = Object.keys(updatedCompleted)
    .filter(key => updatedCompleted[key])
    .map(key => Number(key));

  const isLessonFinished = stepsArray.length >= (activeLesson.tasks?.length || 0);

  const payload = {
    user_id: currentUser.id,
    module_id: Number(selectedModuleId),
    lesson_id: Number(activeLesson.id),
    steps_completed: stepsArray,
    completed: isLessonFinished, 
    answers_data: updatedAnswers
  };

  const { data, error } = await supabase
    .from('user_progress')
    .upsert(payload, { onConflict: 'user_id,module_id,lesson_id' })
    .select();

  if (error) {
    console.error('Error detallado de Supabase:', error);
    return { success: false, error };
  }

  return {
    success: true,
    updatedCompleted,
    updatedAnswers,
    isCompleted: isLessonFinished,
    feedback: successMessage
  };
}