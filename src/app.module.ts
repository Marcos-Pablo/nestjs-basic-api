import { Module } from '@nestjs/common';
import { WorkoutRoutineModule } from './workout-routine/workout-routine.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WorkoutRoutineModule,
    MongooseModule.forRoot(process.env.MONGO_DATABASE_URL),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
