export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: number;
}

export interface TaskStatusChange {
  id: number;
  status: string;
}
