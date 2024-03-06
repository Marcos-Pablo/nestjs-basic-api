import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { WorkoutRoutineResponseDto } from '../dtos/workout-routine-response';
import { WorkoutRoutineService } from '../services/workout-routine.service';
import { WorkoutRoutineRequestParam } from '../dtos/workout-routine-request.param';
import { WorkoutRoutineRequestDto } from '../dtos/workout-routine-request.dto';
import { AuthGuard } from 'src/auth/authentication-guards/auth.guard';

@Controller('workout-routine')
@UseGuards(AuthGuard)
export class WorkoutRoutineController {
  constructor(private readonly workoutRoutineService: WorkoutRoutineService) {}
  @Get()
  async getAll(): Promise<WorkoutRoutineResponseDto[]> {
    const workoutRoutines = await this.workoutRoutineService.getAll();
    return workoutRoutines.map((workoutRoutine) =>
      WorkoutRoutineResponseDto.createFromWorkoutRoutine(workoutRoutine),
    );
  }

  @Get('/:id')
  async getById(
    @Param() params: WorkoutRoutineRequestParam,
  ): Promise<WorkoutRoutineResponseDto> {
    const workoutRoutine = await this.workoutRoutineService.getById(params.id);
    return WorkoutRoutineResponseDto.createFromWorkoutRoutine(workoutRoutine);
  }

  @Post()
  async create(
    @Body() body: WorkoutRoutineRequestDto,
  ): Promise<WorkoutRoutineResponseDto> {
    const workoutRoutine = await this.workoutRoutineService.create(body);
    return WorkoutRoutineResponseDto.createFromWorkoutRoutine(workoutRoutine);
  }

  @Patch(':id')
  async update(
    @Param() params: WorkoutRoutineRequestParam,
    @Body() body: WorkoutRoutineRequestDto,
  ): Promise<WorkoutRoutineResponseDto> {
    const workoutRoutine = await this.workoutRoutineService.update(
      params.id,
      body,
    );

    return WorkoutRoutineResponseDto.createFromWorkoutRoutine(workoutRoutine);
  }

  @Delete(':id')
  async delete(@Param() params: WorkoutRoutineRequestParam): Promise<void> {
    await this.workoutRoutineService.delete(params.id);
  }
}
