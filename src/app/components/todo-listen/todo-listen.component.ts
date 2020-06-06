import { Component, OnInit } from "@angular/core";
import { IAppState } from "src/app/store/states/app.state";
import { Store } from "@ngrx/store";
import { AddTodo } from "src/app/store/actions/todo.action";

@Component({
  selector: "app-todo-listen",
  templateUrl: "./todo-listen.component.html",
  styleUrls: ["./todo-listen.component.scss"],
})
export class TodoListenComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}

  add(value) {
    this.store.dispatch(new AddTodo(value));
  }
}
