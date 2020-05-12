import React from 'react';

import './RemainingTasks.css';

function RemainingTasks(props) {
return <h2 className="remaining-tasks__status">{ props.text } { props.count }</h2>;
  
}

export default RemainingTasks;

