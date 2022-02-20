import React from "react";

//function component Task
export default function Task({name,done,id,onCheckHandler,deleteHandler}) {//props
  return (
    <div className={"todo-item " + (done ? 'complete' : '')}>
      <div className="checker">
        <span className="">
          <input type="checkbox" checked={done} onChange={e => onCheckHandler(id, e.target.checked)} /> 
        </span>
      </div>
      <span>{name}</span>
      <button style={{float: 'right'}} onClick={()=> deleteHandler(id)} className="btn btn-danger">Delete</button>
    </div>
  );
}