import { Injectable } from '@nestjs/common';
import { WorkoutRoutineRepository } from '../repositories/workout-routine.repository';
import { IWorkoutRoutine } from '../interfaces/workout-routine';
import { WorkoutRoutineRequestDto } from '../dtos/workout-routine-request.dto';
import { WorkoutRoutine } from '../models/workout-routine';
import { ulid } from 'ulid';

@Injectable()
export class WorkoutRoutineService {
  constructor(
    private readonly workoutRoutineRepository: WorkoutRoutineRepository,
  ) {}

  async getAll(): Promise<IWorkoutRoutine[]> {
    return await this.workoutRoutineRepository.getAll();
  }

  async getById(id: string): Promise<IWorkoutRoutine> {
    return await await this.workoutRoutineRepository.getById(id);
  }

  async create(
    workoutRoutineRequest: WorkoutRoutineRequestDto,
  ): Promise<IWorkoutRoutine> {
    const workoutRoutine = new WorkoutRoutine(
      ulid(),
      workoutRoutineRequest.name,
      workoutRoutineRequest.totalDays,
    );
    return await this.workoutRoutineRepository.create(workoutRoutine);
  }

  async update(
    workoutRoutineId: string,
    workoutRoutineRequest: WorkoutRoutineRequestDto,
  ): Promise<IWorkoutRoutine> {
    const workoutRoutine = new WorkoutRoutine(
      workoutRoutineId,
      workoutRoutineRequest.name,
      workoutRoutineRequest.totalDays,
    );
    return await this.workoutRoutineRepository.update(workoutRoutine);
  }

  async delete(workoutRoutineId: string): Promise<void> {
    const workoutRoutine = await this.workoutRoutineRepository.getById(
      workoutRoutineId,
    );

    await this.workoutRoutineRepository.delete(workoutRoutine);
  }
}
