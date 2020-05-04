import React from 'react';

import './ButtonItem.css';

function ButtonItem(props) {
  return (
    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
      {props.text}
    </button>
  );
}

export default ButtonItem;


