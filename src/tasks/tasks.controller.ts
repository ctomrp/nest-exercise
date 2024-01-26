import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private ts: TasksService) {}

  @Get()
  helloWorld() {
    return this.ts.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: createTaskDto) {
    return this.ts.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.ts.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: updateTaskDto) {
    return this.ts.updateTask(id, updatedFields);
  }
}
