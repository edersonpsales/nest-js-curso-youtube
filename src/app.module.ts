import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

//@Module é um decorador que marca a classe como um módulo NestJS
// Um módulo é uma classe que agrupa componentes relacionados, como controladores e provedores
// O módulo AppModule é o módulo raiz da aplicação NestJS
// Ele importa o TaskModule, que contém a lógica relacionada às tarefas
// O AppController e AppService são os controladores e serviços principais da aplicação
// O AppController é responsável por lidar com as requisições HTTP e o AppService contém
// a lógica de negócios da aplicação
@Module({
  imports: [
    // ConfigModule para carregar variáveis de ambiente
    // isGlobal: true torna as variáveis de ambiente acessíveis em toda a aplicação
    ConfigModule.forRoot({ isGlobal: true }),
    TaskModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
