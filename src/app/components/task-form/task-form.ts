import { Component, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  newTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('Em progresso'),
    priority: new FormControl(1),
  });

  taskFormOutput = output<Task>();
  cancelOutput = output<void>();

  onCancel() {
    this.cancelOutput.emit();
  }

  taskOnSubmit() {
    const task = this.newTaskForm.value;
    const newTask: Task = {
      title: task.title ?? '',
      description: task.description ?? '',
      status: task.status ?? 'Em progresso',
      priority: task.priority ?? 1,
      id: Date.now(),
    };
    this.taskFormOutput.emit(newTask);
  }
}
