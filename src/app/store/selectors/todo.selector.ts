import { createSelector } from '@ngrx/store';
import { ItodoState } from '../states/todo.state';
import { IAppState } from '../states/app.state';

const selectorTodo = (state: IAppState) => state.todoList;

export const selectorTodoList = createSelector(
    selectorTodo,
    (state: ItodoState) => state.todoList
)