import React from 'react';
import {Link} from 'react-router-dom';

const FriendList = (props) => {
  console.log('FriendList props are ', props);

  if(props.friends.length === 0) { return <h4> finding friends .... </h4> }

  return (
    <div className = "FriendsListContainer">
      {props.friends.map(friend => (
        <Link to = {`/friend-list/${friend.id}`} key = {friend.id}>
          <div className = "FriendCard">
            <h3 className = "FriendName">{friend.name}</h3>
            <h3 className = "FriendAge">{friend.age}</h3>
            <h3 className = "FriendEmail">{friend.email}</h3>
          </div>

        </Link>

      ))}


    </div>

  )


};

export default FriendList;