import { Injectable, signal } from '@angular/core';
import { Task, TaskStatusChange } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);

  FormHandle(task: Task) {
    return this.tasks.update((tasks) => [...tasks, task]);
  }

  ButtonHandle({ id, status }: TaskStatusChange) {
    const taskArray = this.tasks().map((task) => {
      if (task.id === id) {
        return { ...task, status: status };
      } else return task;
    });
    this.tasks.set(taskArray);
  }
}
