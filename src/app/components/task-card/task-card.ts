import { Component, input, output } from '@angular/core';
import { Task, TaskStatusChange } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  id = input.required<number>();
  title = input.required<string>();
  description = input<string>('Sem descrição');
  status = input<string>('Em progresso');
  priority = input.required<number>();

  statusOutput = output<TaskStatusChange>();

  onStatusChange() {
    if (this.status() == 'Em progresso') {
      this.statusOutput.emit({ status: 'Concluido', id: this.id() });
    } else {
      this.statusOutput.emit({ status: 'Em progresso', id: this.id() });
    }
  }
}
