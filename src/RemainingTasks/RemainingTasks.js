import React from 'react';

import './RemainingTasks.css';

function RemainingTasks(props) {
  return (
      <div className="remaining-task-item">
        <p1 className="remaining-task-item__text">{props.text}</p1>
      </div>
  );
}

export default RemainingTasks;

