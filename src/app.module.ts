import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

//@Module é um decorador que marca a classe como um módulo NestJS
// Um módulo é uma classe que agrupa componentes relacionados, como controladores e provedores
// O módulo AppModule é o módulo raiz da aplicação NestJS
// Ele importa o TaskModule, que contém a lógica relacionada às tarefas
// O AppController e AppService são os controladores e serviços principais da aplicação
// O AppController é responsável por lidar com as requisições HTTP e o AppService contém
// a lógica de negócios da aplicação
@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
