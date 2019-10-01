import React from 'react';

import './Toolbar.css';

function Toolbar(props) {
  return (
    <div className="toolbar">
      <i className="icon-leaf"></i>
      {props.text}
    </div>
  );
}

export default Toolbar;