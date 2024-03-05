import { Module } from '@nestjs/common';
import { WorkoutRoutineController } from './controllers/workout-routine.controller';
import { WorkoutRoutineService } from './services/workout-routine.service';
import { WorkoutRoutineMongoRepository } from './repositories/mongo/workout-routine-mongo.repository';
import { WorkoutRoutineRepository } from './repositories/workout-routine.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  WorkoutRoutine,
  WorkoutRoutineSchema,
} from './repositories/mongo/schemas/workout-routine.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WorkoutRoutine.name, schema: WorkoutRoutineSchema },
    ]),
  ],
  controllers: [WorkoutRoutineController],
  providers: [
    WorkoutRoutineService,
    {
      provide: WorkoutRoutineRepository,
      useClass: WorkoutRoutineMongoRepository,
    },
  ],
})
export class WorkoutRoutineModule {}
