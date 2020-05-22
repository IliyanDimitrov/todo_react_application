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
      
        {!props.completed && <span className="task__date">{props.dueDate}h</span>} 
        {props.completed && <span className="task__completed">{props.dueDate}</span>}

      <span className="task__text">
        { props.text }
      </span>
      <div className="input-group-append">
      <span className="task__button--complete">
        { (!props.completed && <ButtonItem text="Complete" handleDeleteClick={handleCompleteClick}/>) || (props.completed && <ButtonItem text="..." />) }
      </span>
      <span className="task__button-delete">
        { (!props.completed && <ButtonItem text="Delete" handleDeleteClick={handleDeleteClick}/>) }
      </span>
      </div>
    </li>
  );
}

export default TaskItem;

