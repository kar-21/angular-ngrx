import { Action } from "@ngrx/store";
import { Itodo } from "src/app/models/todo.model";

export enum EtodoAction {
  AddTodo = "[todo] add to list",
  GetTodo = "[todo] get list",
  GetTodoSuccess = "[todo] get success list",
}

export class GetTodo implements Action {
  public readonly type = EtodoAction.GetTodo;
}

export class GetTodoSuccess implements Action {
  public readonly type = EtodoAction.GetTodoSuccess;
  constructor(public payload: Itodo[]) {}
}

export class AddTodo implements Action {
  public readonly type = EtodoAction.AddTodo;
  constructor(public payload: Itodo) {}
}

export type TodoActions = GetTodo | GetTodoSuccess | AddTodo;
