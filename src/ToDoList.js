import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({task}) {
  return (
    <div class="todo-list">
      {
        task.map(item=>{
          return <ToDoItem key={item.id} name={item.name} done={item.done}/>
        })
      }
    </div>
  );
}
