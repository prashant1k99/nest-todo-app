export interface Todo {
  id: number;
  task: string;
  dateAdded: Date;
  dateUpdated: Date;
  isCompleted: boolean;
  description?: string;
}

export interface TodoCU {
  task: string;
  isCompleted: boolean;
  description?: string;
}
