import styled from 'styled-components';
import {Button} from "./FriendContainerStyled";

/*
font-family: 'Kalam', cursive;
font-family: 'Parisienne', cursive;
font-family: 'Playball', cursive;
font-family: 'Chewy', cursive;
font-family: 'Heebo', sans-serif;
font-family: 'Poppins', sans-serif;
   */

const MainApp = styled.div`
  border: 4px solid slategray;
  color: white;
  background: lightpink;
  border-radius: 10px;
  max-width: 880px;
  min-height: 300px
  margin: .5% auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  font-size: 62.5%;



`;
/*
const MainAppH1 = styled.div`
    font-family: 'Chewy', cursive;
    font-size: 4rem;
    
      color: white;
  text-shadow: 5px 5px 3px darkgray;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
`;
*/

const ResetButton = styled(Button)`
  border: 1px solid darkred;
  font-size: .5rem;
  padding: .5rem 1rem;
  border-radius: 10px;
  color: darkred;
  background: darkgray;
  margin: .25rem;
  font-family: 'Poppins', sans-serif;      

`;


export {MainApp, ResetButton};

