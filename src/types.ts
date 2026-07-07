export interface Exercise {
  id: string;
  name: string;
  series: number;
  reps: string;
  tip: string;
  type: 'mobility' | 'strength' | 'cardio';
  imageUrl: string;
}

export interface DayWorkout {
  day: string;
  label: string;
  focus: string;
  exercises: Exercise[];
}

export interface SavedWorkoutState {
  // Key format: `${dayId}_${exerciseId}_carga` -> value (string)
  charges: Record<string, string>;
  // Key format: `${dayId}_${exerciseId}_series` -> array of booleans [false, true, etc.]
  completedSeries: Record<string, boolean[]>;
}
