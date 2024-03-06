import { IWorkoutRoutine } from '../interfaces/workout-routine';

export class WorkoutRoutineResponseDto {
  id: string;
  name: string;
  total_days: number;

  static createFromWorkoutRoutine(
    workoutRoutine: IWorkoutRoutine,
  ): WorkoutRoutineResponseDto {
    const workoutRoutineResponseDto = new WorkoutRoutineResponseDto();
    workoutRoutineResponseDto.id = workoutRoutine.getId();
    workoutRoutineResponseDto.name = workoutRoutine.getName();
    workoutRoutineResponseDto.total_days = workoutRoutine.getTotalDays();

    return workoutRoutineResponseDto;
  }
}
