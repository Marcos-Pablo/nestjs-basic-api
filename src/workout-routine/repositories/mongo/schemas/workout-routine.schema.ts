import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SchemaFactoryHelper } from 'src/commons/helpers/schema-factory.helper';
import { IWorkoutRoutine } from 'src/workout-routine/interfaces/workout-routine';

export type WorkoutRoutineDocument = HydratedDocument<WorkoutRoutine>;

@Schema()
export class WorkoutRoutine implements IWorkoutRoutine {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  totalDays: number;

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

export const WorkoutRoutineSchema =
  SchemaFactoryHelper.createSchemaForClassWithInstanceMethods(WorkoutRoutine);
