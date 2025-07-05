import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];

  create(task: TaskDto) {
    this.tasks.push(task);
    console.log('Task created:', this.tasks);
  }

  findById(id: string): TaskDto | undefined {
    const foundTask = this.tasks.filter((task) => task.id === id);
    if (foundTask.length) {
      return foundTask[0];
    }

    throw new HttpException(
      `Task with id ${id} not found`,
      HttpStatus.NOT_FOUND,
    );
  }

  update(task: TaskDto): TaskDto {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index === -1) {
      throw new HttpException(
        `Task with id ${task.id} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }
    this.tasks[index] = task;
    return task;
  }
}
