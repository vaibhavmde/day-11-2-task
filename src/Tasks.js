import React from 'react';
import Task from './Task';

//function component Tasks
export default function Tasks({tasks, onCheckHandler, deleteHandler}) {//props
  return (
    <div className="todo-list">
        {
            tasks.length > 0 ? tasks.map(item => {//condition rendering
                return (
                  <Task                   //pasing props to child component
                    key={item.id}
                    name={item.name}
                    done={item.done}
                    onCheckHandler={onCheckHandler}
                    deleteHandler={deleteHandler}
                    id={item.id}
                  />
                );
            }): <div>No Tasks to display</div>
        }
    </div>
  )
}