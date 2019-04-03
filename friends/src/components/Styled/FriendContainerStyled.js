import styled from 'styled-components';

/*
font-family: 'Kalam', cursive;
font-family: 'Parisienne', cursive;
font-family: 'Playball', cursive;
font-family: 'Chewy', cursive;
font-family: 'Heebo', sans-serif;
font-family: 'Poppins', sans-serif;
   */


const FriendsListContainer = styled.div`
 border: 1px solid orange;
 display: flex;
 align-items: center;
 align-content: center;
 justify-content: center;
 flex-wrap: wrap; 
 width: 90%;
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
  font-size: .75rem;
  
`;


export {FriendsListContainer, FriendCard, FriendH3};