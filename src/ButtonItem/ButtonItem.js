import React from 'react';

import './ButtonItem.css';

function ButtonItem(props) {

  return (
    <button type="button" className="btn btn-primary" onClick={ props.handleClick } data-toggle="button" aria-pressed="false" autoComplete="off">
       <span className="button--text">{ props.text }</span>
    </button>
  );
}

export default ButtonItem;