import React from "react";

export default function ToDoItem({key,name,done}) {
  return (
    <div>
      <div className="todo-item">
        <div className="checker">
          <span className="">
            <input type="checkbox" />
          </span>
        </div>
        <span></span>
      </div>
    </div>
  );
}
