import React from "react";
import TodoItem from "./TodoItem";

export default function (props) {
  return (
    <div className="container" style={{margin: "auto", width:"fit-content"}}>
      <h3 className="text-center">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
