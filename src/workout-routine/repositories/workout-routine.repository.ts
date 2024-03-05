import { IWorkoutRoutine } from '../interfaces/workout-routine';

export abstract class WorkoutRoutineRepository {
  abstract getAll(): Promise<IWorkoutRoutine[]>;
  abstract getById(id: string): Promise<IWorkoutRoutine>;
  abstract create(workoutRoutine: IWorkoutRoutine): Promise<IWorkoutRoutine>;
  abstract update(workoutRoutine: IWorkoutRoutine): Promise<IWorkoutRoutine>;
  abstract delete(workoutRoutine: IWorkoutRoutine): Promise<void>;
}
