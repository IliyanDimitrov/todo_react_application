import React from 'react';

import './TaskItem.css';
import ButtonItem from '../ButtonItem/ButtonItem';

function TaskItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      
        {!props.completed && <span className="task__date">{props.dueDate}h</span>} 
        {props.completed && <span className="task__completed">{props.dueDate}</span>}

      <span className="task__text">
        { props.text }
      </span>

      <span className="task__button">
        { (!props.completed && <ButtonItem text="Complete" />) || (props.completed && <span>Completed</span>) }
      </span>
    </li>
  );
}

export default TaskItem;

