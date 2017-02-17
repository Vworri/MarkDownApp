import React, { Component } from 'react';
import './App.css';
var Markdown = require('react-markdown');


class MarkdownPrev extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: '# Introduction \n ## Type markdown here'};
    }
    handleChange(e){
       this.setState({value : e.target.value});

    }
    render(){
        const value = this.state.value;
        return(
            <div>
                <textarea className="TextArea" value={value} onChange={this.handleChange}/>
                <Markdown className="PrevArea" source={value}/>
            </div>
        )
    }
}


class App extends Component {
  render() {
    return (
      <div className="App">
          <MarkdownPrev/>
      </div>

    );
  }
}

export default App;

