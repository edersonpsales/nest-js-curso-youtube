/**
 * Diferença entre DTO e Entity:
 * DTO (Data Transfer Object) é usado para transferir dados entre processos, enquanto Entity representa
 * uma tabela no banco de dados.
 *
 * DTO é usado para validação e formatação de dados,
 * enquanto Entity é usado para mapear dados para o banco de dados.
 *
 * Diferença entre DTO e Interface:
 * DTO é uma classe que pode conter lógica de validação e transformação de dados,
 * enquanto Interface é uma definição de tipo que não pode conter lógica.
 *
 * DTO é usado para transferir dados entre processos, enquanto
 * Interface é usada para definir a forma de um objeto.
 */

export class TaskDto {
  id: string;
  title: string;
  description: string;
  status: string;
  expirationDate: Date;
}

export interface FindAllParameters {
  title: string;
  //? serve para indicar que o parâmetro é opcional
  status?: string;
}
