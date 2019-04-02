import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  NavLink,
  Route


} from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activeFriend: null,
      friends: [],
      error: '',
      errorMSG: 'You need to get out and make some friends ;(  ...',

    }
  }

  componentDidMount() {
    console.log("CDM active");

    axios
      .get('http://localhost:5000/friends')
      .then(result => {
        console.log("Dan said to check result, so...", result);
        this.setState({ friends: result.data});

      })
      .catch(err => {
        console.log("YOU got an ERROR!", err);
        this.setState({error: err});

      })

  }


  render() {
    return (
      <div className="App">
        <h1> Something </h1>
      </div>
    );
  }
}

export default App;
