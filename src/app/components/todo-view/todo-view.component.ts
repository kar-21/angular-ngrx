import { Component, OnInit } from "@angular/core";
import { GetTodo } from "src/app/store/actions/todo.action";
import { IAppState } from "src/app/store/states/app.state";
import { Store, select } from "@ngrx/store";
import { selectorTodoList } from 'src/app/store/selectors/todo.selector';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: "app-todo-view",
  templateUrl: "./todo-view.component.html",
  styleUrls: ["./todo-view.component.scss"],
})
export class TodoViewComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  todo = this.store.pipe(select(selectorTodoList));

  ngOnInit() {
    this.store.dispatch(new GetTodo());
  }
}
