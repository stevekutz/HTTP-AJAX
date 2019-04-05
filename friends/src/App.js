import React, { Component } from 'react';
import FriendList from './components/FriendContainer/FriendList';
import Friend from './components/FriendContainer/Friend';
import Home from './components/Home';
import FriendForm from './components/FriendContainer/FriendForm';

import axios from 'axios';
import ReactDOM from 'react-router-dom';
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
       //  console.log("Dan said to check result, so...", result);
        this.setState({ friends: result.data});

      })
      .catch(err => {
        console.log("YOU got an ERROR!", err);
        this.setState({error: err});

      })

  }

  addFriend = (e, friend) => {
    e.preventDefault();
    console.log("Dan says to check addFriend friend ", friend);

    axios
      .post("http://localhost:5000/friends", friend)
      .then(result => {
        this.setState(
          {friends: result.data}
        )
      })
      .catch(err => {
        console.log(err);
      })

  };





  render() {
    return (
      <MainApp>



        <Route path="/" component={Home} />


        <Route

          exact path = "/friend-list"
          render = {
            props => <FriendList {...props} friends = {this.state.friends}/>
          }

        />

        <Route
          path = "/friend-list/:id"   // {/* path = "/:friendID"  */}
          render = {props => (
            <Friend
              {...props}
              friends = {this.state.friends}
            />
          )}
        />

        <Route
          path = "/friend-form"
          render = {props => (
            <FriendForm
              {...props}
              activeFriend = {this.state.activeFriend}


            />
          )}






        />



      </MainApp>

    );
  }
}

export default App;
