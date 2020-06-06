import { RouterReducerState } from '@ngrx/router-store'; 
import { ItodoState, initialTodoList } from './todo.state';

export interface IAppState {
    router?: RouterReducerState;
    todoList: ItodoState;
}

export const initialAppState: IAppState = {
    todoList: initialTodoList
}