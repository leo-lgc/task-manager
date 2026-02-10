import { Component } from '@angular/core';
import { TaskCard } from '../../components/task-card/task-card';
import { TaskService } from '../../services/task.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [TaskCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected taskService = inject(TaskService);
}
