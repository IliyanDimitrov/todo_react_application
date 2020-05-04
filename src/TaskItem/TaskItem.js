import React from 'react';

import './TaskItem.css';
import ButtonItem from '../ButtonItem/ButtonItem';

function TaskItem(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {props.text}
      <span>
      <ButtonItem text="Complete" />
      </span>
    </li>
  );
}

export default TaskItem;

