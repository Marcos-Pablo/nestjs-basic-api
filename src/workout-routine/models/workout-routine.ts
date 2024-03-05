import { IWorkoutRoutine } from '../interfaces/workout-routine';

export class WorkoutRoutine implements IWorkoutRoutine {
  constructor(
    private id: string,
    private name: string,
    private totalDays: number,
  ) {}

  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getTotalDays(): number {
    return this.totalDays;
  }
}
