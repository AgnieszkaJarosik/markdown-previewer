import React from 'react';
import Textarea from './Textarea/Textarea';
import Preview from './Preview/Preview';
import Converter from './Converter';
import text from './text';

import './App.css';
import './fontello/css/fontello.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      text: text,
      html: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ html: Converter.start(this.state.text) });
  }

  handleChange (value) {
    this.setState({ text: value,
                    html: Converter.start(value) });

  }

  render() {
    return (
      <div className="App">
        <Textarea text={this.state.text} handleChange={this.handleChange} />
        <Preview html={this.state.html} />
      </div>
    );
  }

}

export default App;
