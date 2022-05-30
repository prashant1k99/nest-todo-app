import { Injectable } from '@nestjs/common';
import { Todo, TodoCU } from './interfaces/todo.interface';
import { generateId } from './todo.utility';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];
  private ids = generateId();

  create(todo: TodoCU) {
    const item = {
      id: this.ids.next().value as number,
      dateAdded: new Date(),
      dateUpdated: new Date(),
      ...todo,
    };
    this.todos.push(item);
    return item;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodo: TodoCU) {
    const todoItemIndex = this.todos.findIndex((todo) => todo.id === id);
    this.todos[todoItemIndex] = {
      ...this.todos[todoItemIndex],
      ...updateTodo,
      dateUpdated: new Date(),
    };

    return this.todos[todoItemIndex];
  }

  remove(id: number) {
    const todoItemIndex = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(todoItemIndex, 1);
    return `This action removes a #${id} todo`;
  }
}
