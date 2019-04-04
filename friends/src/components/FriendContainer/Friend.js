import React from 'react';
import {Link} from 'react-router-dom';



function Friend({friends, match}) {

  console.log('Friends are ', friends);
  console.log('match is ', match);

  const id =  Number(match.params.id);
  console.log("id is", id);



  const friend = friends.find(friend => {
     console.log("friend is ", friend);
     return friend.id === id;
  });




  /*
  console.log('Friend props ', props);

  const friend = props.friends.find(bestie => {
    console.log("bestie is ", bestie);
    console.log("matched friend is ", props.match.params.id);

    return `${bestie.id}` === props.match.params.id;

  });
  */

  /*
      <h4>name: {friend.name}</h4>
      <h4>age: {friend.age}</h4>
      <h4>email: {friend.email}</h4>

   */

  return (
    <div className = "FriendWrapper">
        <h1>Something inside with id {id}</h1>
      <h2> Show me {friend.name}</h2>
    </div>



  )


}

export default Friend;