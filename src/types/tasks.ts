export enum TaskStatus {
  PENDING = "pending",
  COMPLETED = "completed",
}

// Interface for a task object
export interface Task {
  id: string;               // Unique ID for task
  title: string;            // Task title
  description: string;      // Task description
  category: string;         // Category/tag for task
  status: TaskStatus;       // Pending or completed
  createdAt: Date;          // Timestamp
}
