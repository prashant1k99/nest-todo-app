import { Injectable } from '@nestjs/common';
import { Todo, TodoCU } from './interfaces/todo.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  create(todo: TodoCU) {
    const createdTodo = this.todoModel.create(todo);
    return createdTodo;
  }

  findAll() {
    return this.todoModel.find();
  }

  findOne(id: string) {
    return this.todoModel.findById(id);
  }

  update(id: string, updateTodo: TodoCU) {
    return this.todoModel.findByIdAndUpdate(id, updateTodo, { new: true });
  }

  remove(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
