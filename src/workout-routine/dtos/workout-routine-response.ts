import { IWorkoutRoutine } from '../interfaces/workout-routine';

export class WorkoutRoutineResponseDto {
  id: string;
  name: string;
  totalDays: number;

  static createFromWorkoutRoutine(
    workoutRoutine: IWorkoutRoutine,
  ): WorkoutRoutineResponseDto {
    const workoutRoutineResponseDto = new WorkoutRoutineResponseDto();
    workoutRoutineResponseDto.id = workoutRoutine.getId();
    workoutRoutineResponseDto.name = workoutRoutine.getName();
    workoutRoutineResponseDto.totalDays = workoutRoutine.getTotalDays();

    return workoutRoutineResponseDto;
  }
}
