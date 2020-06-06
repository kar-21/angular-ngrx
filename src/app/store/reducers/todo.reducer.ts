import { initialTodoList, ItodoState } from "../states/todo.state";
import { TodoActions, EtodoAction } from "../actions/todo.action";

export const todoReducer = (
  state = initialTodoList,
  action: TodoActions
): ItodoState => {
  switch (action.type) {
    case EtodoAction.GetTodoSuccess:
      return { ...state, todoList: action.payload };
    default:
      return { ...state };
  }
};
