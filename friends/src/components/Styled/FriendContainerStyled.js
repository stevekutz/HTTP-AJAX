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
 display: flex;
 align-items: center;
 align-content: center;
 justify-content: center;
 flex-wrap: wrap; 
 width: 90%;
 margin 15px;
 border-radius: 4px;
 


`;

const FriendListCard = styled.div`
  border: 1px solid darkslategray;
  margin: 5px;
  border-radius: 15px;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  font-family: 'Playball', cursive;
  color: darkslategray;
  background: aliceblue;
  text-decoration: none;
  font-size: .75rem;
`;


const FriendCard = styled(FriendListCard)`
  color: dodgerblue;
  background: aliceblue;
  border: 2px solid palevioletred;      

`;

const FriendH3 = styled.div`
  text-decoration: none;
  font-size: 1rem;
  padding: .5rem;
  text-shadow: 3px 3px 2px darkgray;
  
`;

const FriendH3Title = styled(FriendH3)`
  font-size: 2rem;
  padding: .5rem;
  text-shadow: 3px 3px 2px darkgray;
      -webkit-text-stroke-width: .25px;
      -webkit-text-stroke-color: black;

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
  outline: none;      
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

`;


const FormFriend = styled.form`
  display: flex;
  justify-content: center;      
  width: 100%;      

`;




const FormButton = styled(Button)`
  border: 1px solid darkslategray;
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: 10px;
  
  color: darkslategray;
  background: papayawhip;
  margin: .25rem;
  outline: none;      

`;

const FormInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: 1px solid darkslategray;
  border-radius: 5px;
`;

const FormInputNarrow = styled(FormInput)`
  width: 15%;      


`;



export {FriendsListContainer,
        FriendListCard,
        FriendCard,
        FriendH3,
        FriendH3Title,
        LinkFriend,
        Button,
        ButtonContainer,
        FormFriend,
        FormButton,
        FormInput,
        FormInputNarrow,
};

