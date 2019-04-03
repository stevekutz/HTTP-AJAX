import React, { Component } from 'react';
import FriendList from './components/FriendContainer/FriendList';

import axios from 'axios';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  NavLink,
  Route,


} from 'react-router-dom'

import {
  MainApp,
  MainAppH1
} from './components/Styled/MainApp_Styled';


// import './App.css';

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
      <MainApp>
        <MainAppH1> Friends with HTTP-AJAX !!!</MainAppH1>

        <Route
          exact
          path = "/"
          render = {
            props => <FriendList {...props} friends = {this.state.friends}/>
          }

        />

      </MainApp>

    );
  }
}

export default App;
