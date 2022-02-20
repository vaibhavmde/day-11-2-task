import React from "react";

//function component Filter
export default function Filter({ onFilterChange }) { //props onFilterChange
  const filters = ["all", "active", "completed"]; 
  const clickHandler = (currentValue) => {  // clickHandler function
    onFilterChange(currentValue);       //calling parent function in child component
  }
  return (
    <ul className="nav nav-pills todo-nav">
      {filters.map(item => {        //map for all filter
        return (<li
          key={item}
          role="presentation"
          className="nav-item all-task active"
          onClick={() => clickHandler(item)}
        >
          <a className="nav-link" style={{cursor: 'pointer', textTransform: 'capitalize'}}>
            {item}
          </a>
        </li>)
      })}
    </ul>
  );
}