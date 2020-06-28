import React from 'react';

import './TaskItem.css';
import ButtonItem from '../ButtonItem/ButtonItem';

function TaskItem(props) {

  const handleDeleteClick = () => {
     props.deleteTask(props.id);
  }

  const handleCompleteClick = () => {
    props.completeTask(props.id);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">

      <span className="task__text">
        
        {!props.completed && <span className="task__date">{props.due_date}h</span>} 
        {props.completed && <span className="task__completed">{props.due_date}</span>}
        { props.text }
        
      </span>
      <div className="input-group-append">
      <span className="task__button--complete">
        { (!props.completed && <ButtonItem text="Complete" handleClick={handleCompleteClick}/>) }
      </span>
      <span className="task__button-delete">
        { <ButtonItem text="Delete" handleClick={handleDeleteClick}/> }
      </span>
      </div>
    </li>
  );
}

export default TaskItem;

