export interface Todo {
  id: number;
  title: string;
  dateAdded: Date;
  dateUpdated: Date;
  isCompleted: boolean;
  description?: string;
}

export interface TodoCU {
  title: string;
  isCompleted: boolean;
  description?: string;
}
