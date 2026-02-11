import { Component, signal } from '@angular/core';
import { TaskCard } from '../../components/task-card/task-card';
import { TaskService } from '../../services/task.service';
import { inject } from '@angular/core';
import { TaskForm } from '../../components/task-form/task-form';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-home',
  imports: [TaskCard, TaskForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected taskService = inject(TaskService);

  showModal = signal(false);

  onTaskCreated(event: Task) {
    this.taskService.FormHandle(event);
    this.ModalOff();
  }

  ModalOn() {
    if (this.showModal() == false) {
      this.showModal.set(true);
    }
  }
  ModalOff() {
    if (this.showModal() == true) {
      this.showModal.set(false);
    }
  }
}
