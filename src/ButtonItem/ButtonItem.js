import React from 'react';

import './ButtonItem.css';

function ButtonItem(props) {

  return (
    <button type="button" className="btn btn-primary" onClick={ props.handleDeleteClick } data-toggle="button" aria-pressed="false" autoComplete="off">
      {props.text}
    </button>
  );
}

export default ButtonItem;


