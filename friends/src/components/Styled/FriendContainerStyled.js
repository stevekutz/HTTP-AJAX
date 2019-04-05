import styled from 'styled-components';
import {Link} from 'react-router-dom';

/*
font-family: 'Kalam', cursive;
font-family: 'Parisienne', cursive;
font-family: 'Playball', cursive;
font-family: 'Chewy', cursive;
font-family: 'Heebo', sans-serif;
font-family: 'Poppins', sans-serif;
   */


const FriendsListContainer = styled.div`
 border: 1px solid orangered;
 display: flex;
 align-items: center;
 align-content: center;
 justify-content: center;
 flex-wrap: wrap; 
 width: 90%;
 margin 15px;
 border-radius: 4px;
 


`;

const FriendCard = styled.div`
  border: 2px solid white;
  margin: 5px;
  border-radius: 15px;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  font-family: 'Playball', cursive;
  
  text-decoration: none;
  font-size: .75rem;



`;

const FriendH3 = styled.div`
  text-decoration: none;
  font-size: 1rem;
  
`;


const LinkFriend = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: darkslategray;
`;

const Button = styled.button`
  color: dodgerblue;
  font-size: 1em;
  margin: 1em;
  padding: 1.25rem 2rem;
  border: 2px solid palevioletred;
  border-radius: 15px;
 font-family: 'Playball', cursive;
  font-size: 1.25rem;

`;


export {FriendsListContainer,
        FriendCard,
        FriendH3,
        LinkFriend,
        Button,




};