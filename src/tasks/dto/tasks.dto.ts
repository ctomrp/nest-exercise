import { TaskStatus } from '../tasks.entity';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class createTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  description: string;
}

export class updateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  @IsOptional()
  status?: TaskStatus;
}
