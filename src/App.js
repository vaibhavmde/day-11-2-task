import "./App.css";
import { useState } from "react";
import Form from './Form';
import Filter from "./Filter";
import Tasks from "./Tasks";
//function component
function App() {
  const [filter, setFilter] = useState("all"); // three states are created as filter , count , tasks
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const onSubmit = (value) => {              //onsubmit takes value from From component
    setTasks([...tasks,{                       //setTasks to set value of tasks
      id: count,
      name: value,
      done: false
    }]);
    setCount(count+1);                  //setCount to set count
  }

  //onCheckHandler takes value from Task
  const onCheckHandler = (id, checked) => {   
    setTasks(tasks.map(item => {              //filter task based on checked
      return item.id === id ? {...item, done: checked} : item;
    }));
  };

  //onFilterChange takes value from Filter component
  const onFilterChange = (newValue) => { 
    setFilter(newValue);     // setFilter to set filter
  }

// filter task based on filter
  const filterTasks = () => { 
    // "all", "active", "completed"
    if(filter === 'active') {
      return tasks.filter(item => item.done === false);
    } else if(filter === 'completed') {
      return tasks.filter(item => item.done === true);
    }
    return tasks;
  }

// deleteHandler to delete task
  const deleteHandler = (id) => { 
    const filterValues = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(filterValues);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <Form onSubmit={onSubmit} /> 
              <Filter onFilterChange={onFilterChange}/>
              <Tasks tasks={filterTasks()} onCheckHandler={onCheckHandler} deleteHandler={deleteHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;