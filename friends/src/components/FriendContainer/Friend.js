import React from 'react';
import {Route} from 'react-router-dom'; // for subroutes later

import {
  FriendsListContainer,
  FriendCard,
  FriendH3,
  LinkFriend,
  Button,


} from '../Styled/FriendContainerStyled';


function Friend({friends, match, deleteFriend, setUpdateForm}) {

  console.log('Friends are ', friends);
  console.log('match is ', match);

  const id =  Number(match.params.id);
  console.log("id is", id);



  const friend = friends.find(friend => {
     console.log("friend is ", friend);
     return friend.id === id;
  });


  /*
          <h2> Friend name: {friend.name}</h2>
        <h2> Friend age: {friend.age}</h2>
        <h2> Friend email: {friend.email}</h2>

   */

  if(!friend) {
    return <h2>.... LOADING in Friends</h2>
  }


  return (
    <div className = "FriendWrapper">
      <div className = "FriendCard">
        <h1>Something inside with id {id}</h1>
        <h2> Friend name: {friend.name}</h2>
        <h2> Friend age: {friend.age}</h2>
        <h2> Friend email: {friend.email}</h2>

      </div>

      <Button
        className = "UpdateButton"
        onClick = {e => setUpdateForm(e, friend)}
      >
        Update Friend
      </Button>


      <Button
        className = "DeleteButton"
        onClick={ e => deleteFriend(e, friend.id)}
      >
        Delete Friend
      </Button>



    </div>



  )


}

export default Friend;