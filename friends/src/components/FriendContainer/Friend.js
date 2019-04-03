import React from 'react';
import {Link} from 'react-router-dom';

import {
  FriendsListContainer,
  FriendCard,
  FriendH3,
  LinkFriend

} from '../Styled/FriendContainerStyled';


function Friend(props) {
  console.log(props.friends);

  const friend = props.friends.find(friend => {
    console.log("friend is ", friend);
    console.log("matched friend is ", props.match.params.friendID);

    return `${friend.ID}` === props.match.params.friendID;

  });


  /*
        <h4>name: {friend.name}</h4>
      <h4>age: {friend.age}</h4>
      <h4>email: {friend.email}</h4>

   */

  return (
    <div className = "FriendWrapper">
      <h2>Something inside</h2>



    </div>



  )


}

export default Friend;