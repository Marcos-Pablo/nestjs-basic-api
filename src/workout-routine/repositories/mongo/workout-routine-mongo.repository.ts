import { IWorkoutRoutine } from 'src/workout-routine/interfaces/workout-routine';
import { WorkoutRoutineRepository } from '../workout-routine.repository';
import { InjectModel } from '@nestjs/mongoose';
import { WorkoutRoutine } from './schemas/workout-routine.schema';
import { Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

export class WorkoutRoutineMongoRepository extends WorkoutRoutineRepository {
  constructor(
    @InjectModel(WorkoutRoutine.name)
    private workoutRoutineModel: Model<WorkoutRoutine>,
  ) {
    super();
  }

  async getAll(): Promise<IWorkoutRoutine[]> {
    return await this.workoutRoutineModel.find().exec();
  }
  async getById(id: string): Promise<IWorkoutRoutine> {
    const workoutRoutineSchema =
      await this.workoutRoutineModel.findOne<IWorkoutRoutine>({
        id,
      });

    if (!workoutRoutineSchema) throw new NotFoundException();
    return workoutRoutineSchema;
  }
  async create(workoutRoutine: IWorkoutRoutine): Promise<IWorkoutRoutine> {
    return await this.workoutRoutineModel.create(workoutRoutine);
  }
  async update(workoutRoutine: IWorkoutRoutine): Promise<IWorkoutRoutine> {
    const workoutRoutineSchema =
      await this.workoutRoutineModel.findOneAndUpdate(
        { id: workoutRoutine.getId() },
        {
          name: workoutRoutine.getName(),
          totalDays: workoutRoutine.getTotalDays(),
        },
        {
          new: true,
        },
      );

    if (!workoutRoutineSchema) throw new NotFoundException();
    return workoutRoutineSchema;
  }
  async delete(workoutRoutine: IWorkoutRoutine): Promise<void> {
    await this.workoutRoutineModel.deleteOne({
      id: workoutRoutine.getId(),
    });
  }
}
