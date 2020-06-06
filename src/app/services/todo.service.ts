import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Itodo } from "../models/todo.model";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  url = "http://localhost:5000/todo";
  newOject: any;

  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  getTodoList(): Observable<Itodo[]> {
    return this.http.get<Itodo[]>(this.url);
  }

  postTodo(val): Observable<Itodo> {
    const body = Object.assign({}, val, { newElementFieldName: this.newOject });
    return this.http.post<Itodo>(this.url, JSON.stringify(body), this.options);
  }
}
