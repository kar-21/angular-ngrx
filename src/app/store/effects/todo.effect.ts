import { Injectable } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";
import { IAppState } from "../states/app.state";
import { Store } from "@ngrx/store";
import { Effect, ofType, Actions } from "@ngrx/effects";
import {
  GetTodo,
  EtodoAction,
  GetTodoSuccess,
  AddTodo,
} from "../actions/todo.action";
import { switchMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { Itodo } from "src/app/models/todo.model";

@Injectable()
export class TodoEffect {
  constructor(
    private service: TodoService,
    private actions: Actions,
    private store: Store<IAppState>
  ) {}

  val;
  userHttp;
  values;
  @Effect()
  getTodoList = this.actions.pipe(
    ofType<GetTodo>(EtodoAction.GetTodo),
    switchMap(() => this.service.getTodoList()),
    switchMap((userHttp: Itodo[]) => of(new GetTodoSuccess(userHttp)))
  );

  @Effect()
  addTodo = this.actions.pipe(
    ofType<AddTodo>(EtodoAction.AddTodo),
    map((action) => (this.values = action.payload)),
    switchMap(() => this.service.postTodo({ task: this.values })),
    switchMap(() => of(new GetTodo()))
  );
}
