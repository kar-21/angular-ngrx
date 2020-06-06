import { Itodo } from 'src/app/models/todo.model';

export interface ItodoState {
    todoList: Itodo[];
}

export const initialTodoList: ItodoState = {
    todoList: null
};