import { Injectable, signal } from '@angular/core';
import { Task, TaskStatusChange } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Task Exemplo',
      description: 'Essa é uma task simples que eu criei para testar o sistema.',
      status: 'Em progresso',
      priority: 3,
    },
    {
      id: 2,
      title: 'Revisar documentação',
      description: 'Verificar se toda documentação está atualizada.',
      status: 'Pendente',
      priority: 2,
    },
    {
      id: 3,
      title: 'Implementar autenticação',
      description: 'Adicionar autenticação de usuários ao sistema.',
      status: 'Em progresso',
      priority: 3,
    },
    {
      id: 4,
      title: 'Testar funcionalidades',
      description: 'Executar testes nas funcionalidades principais.',
      status: 'Concluído',
      priority: 1,
    },
  ]);

  ButtonHandle({ id, status }: TaskStatusChange) {
    const taskArray = this.tasks().map((task) => {
      if (task.id === id) {
        return { ...task, status: status };
      } else return task;
    });
    this.tasks.set(taskArray);
  }
}
