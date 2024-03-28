export interface Todo {
  id: number;
  title: string;
  category: string;
  dueDate: Date;
  isDone: boolean;
  latitude?: number;
  longitude?: number;
}

export interface TodoDto {
  id: number;
  title: string;
  category: string;
  dueDate: string;
  isDone: boolean;
  latitude?: number;
  longitude?: number;
}