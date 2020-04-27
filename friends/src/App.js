import React, { Component } from 'react';
import FriendList from './components/FriendContainer/FriendList';
import Friend from './components/FriendContainer/Friend';
import Home from './components/Home';
import FriendForm from './components/FriendContainer/FriendForm';

import axios from 'axios';
import {
  Route,


} from 'react-router-dom'

import {
  MainApp,
  ResetButton,

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
      .then(res => {
        this.setState({ friends: res.data});
      })
      .catch(err => {
        console.log("YOU got an ERROR!", err);
        this.setState({error: err});
      })
  }

  resetFriends = () => {
    console.log("RESET invoked");
    this.setState({
        activeFriend: null,
        friends: [],
        error: '',
        errorMSG: 'You need to get out and make some friends ;(  ...',
      }
    );

    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data});
      })
      .catch(err => {
        console.log("YOU got an ERROR!", err);
        this.setState({error: err});
      })

  };



  addFriend = (e, friend) => {
    e.preventDefault();

    if( friend.name && friend.age && friend.email) {
      axios
        .post('http://localhost:5000/friends', friend)
        .then(res => {
          this.setState({ friends: res.data })
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      console.log("You entered no friend info")
    }



  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    console.log(">>>> check deleteFriend id ", this.props);

    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/friend-list");
      })
      .catch(err => {
        console.log(err);
      })

  };

  setUpdateForm = (e, friend) => {
    console.log("setUpdateForm friend is ", friend);
    e.preventDefault();
    this.setState({ activeFriend: friend });

    this.props.history.push("/friend-form");
  };


  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          activeFriend: null,
          friends: res.data
        });
        this.props.history.push("/friend-list");
      })
      .catch(err => {
        console.log(err);
      })

  };

  // <Route path="/" component={Home} />

  render() {
    return (
      <MainApp>


        <Route
          path="/"
          render = { props =>
            <Home
              {...props}
              friends = {this.state.friends}
            />
          }
        />


        <Route
          exact path = "/friend-list"
          render = { props =>
            <FriendList
              {...props}
              friends = {this.state.friends}
            />
          }
        />

        <Route
          path = "/friend-list/:id"
          render = { props => (
            <Friend
              {...props}
              friends = {this.state.friends}
              deleteFriend = {this.deleteFriend}
              setUpdateForm = {this.setUpdateForm}
            />
          )}
        />

        <Route
          path = "/friend-form"
          render = { props => (
            <FriendForm
              {...props}
              activeFriend = {this.state.activeFriend}
              addFriend = {this.addFriend}
              updateFriend = {this.updateFriend}
            />
          )}



        />

        <ResetButton
          className = "resetButton"
          onClick = {this.resetFriends}
        >
          Reset
        </ResetButton>


      </MainApp>

    );
  }
}


export default App;
