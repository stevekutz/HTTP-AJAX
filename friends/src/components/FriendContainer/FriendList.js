import React from 'react';
import {Link} from 'react-router-dom';

import {
  FriendsListContainer,
  FriendCard,
  FriendH3,
  LinkFriend

} from '../Styled/FriendContainerStyled';


const FriendList = (props) => {
  console.log('FriendList props are ', props);

  if(props.friends.length === 0) { return <h4> finding friends .... </h4> }

  return (
    <FriendsListContainer>
      {props.friends.map(friend => (
        <LinkFriend to = {`/friend-list/${friend.id}`} key = {friend.id}>
          <FriendCard>
            <FriendH3>Name: {friend.name}</FriendH3>
            <FriendH3>Age: {friend.age}</FriendH3>
            <FriendH3>email: {friend.email}</FriendH3>
          </FriendCard>

        </LinkFriend>

      ))}


    </FriendsListContainer>

  )


};

export default FriendList;