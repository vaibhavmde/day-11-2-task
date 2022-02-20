import React, { useState } from "react";

//function component Form
export default function Form({ onSubmit }) { //props onSubmit
    const [task, setTask] = useState('');   // hook task
  return (
    <form onSubmit={(e) => e.preventDefault()}> //prevent auto-submit
      <input
        type="text"
        className="form-control add-task"
        placeholder="New Task..."
        value={task}
        onChange={(e) => {          //event onChange
            setTask(e.target.value);
        }}
        onKeyPress={(e)=>{         //event onKeyPress
            if(e.key === 'Enter' && task.length > 0) {
                onSubmit(task);
                setTask('');
            }
        }}
      />
    </form>
  );
}
