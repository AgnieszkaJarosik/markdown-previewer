import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

import './Preview.css';

function Preview (props) {
const DOMPurify = require('dompurify');
const clean = DOMPurify.sanitize(props.html);

  return (
    <div className="preview-container">
      <Toolbar text="Previewer" />
      <div id="preview" dangerouslySetInnerHTML={{ __html: clean} }>
      </div>
    </div>
  );
}

export default Preview;