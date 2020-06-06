import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { routerReducer } from '@ngrx/router-store';
import { todoReducer } from './todo.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    todoList: todoReducer
}