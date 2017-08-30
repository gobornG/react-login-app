import React, { Component } from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import './App.css';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }


  login(value) {
    const state = this.state;
    
    state.value= value;
    
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <Header value={this.state.value}/>
        <Body login={this.login.bind(this)}/> 
      </div>
    );
  }
}

export default App;
