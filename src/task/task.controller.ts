import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  create(@Body() task: TaskDto) {
    this.taskService.create(task);
  }

  @Get('/:id')
  findById(@Param('id') id: string): TaskDto {
    return this.taskService.findById(id);
  }

  //router parameters são parametros que são passados na URL
  //query parameters são parametros que são passados na URL após o ponto de interrogação
  //exemplo: /task?status=done&priority=high
  //query parameters são opcionais, enquanto router parameters são obrigatórios
  @Get()
  findAll(@Query() params: FindAllParameters): TaskDto[] {
    return this.taskService.findAll(params);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() task: TaskDto): TaskDto {
    return this.taskService.update({ ...task, id });
  }

  @Delete('/:id')
  remove(@Param('id') id: string): void {
    this.taskService.remove(id);
  }
}
