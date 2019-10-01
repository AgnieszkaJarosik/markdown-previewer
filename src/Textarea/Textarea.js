import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

import './Textarea.css';

function Textarea(props) {

  const handleTextareaChange = (e) => {
    props.handleChange(e.target.value);
  }

  return (
    <div className="editor-container">
      <Toolbar text="Editor" />
      <textarea id="editor" type="text" wrap="hard"
                value={props.text} 
                onChange={handleTextareaChange} >
      </textarea>
    </div>
  );
}

export default Textarea;