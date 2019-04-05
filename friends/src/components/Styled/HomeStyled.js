import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


/*
font-family: 'Kalam', cursive;
font-family: 'Parisienne', cursive;
font-family: 'Playball', cursive;
font-family: 'Chewy', cursive;
font-family: 'Heebo', sans-serif;
font-family: 'Poppins', sans-serif;
   */


const HomeH1 = styled.div`
    border: 1px solid green;
    font-family: 'Chewy', cursive;
    font-size: 4rem;
    color: white;
    text-shadow: 5px 5px 3px darkgray;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    margin: 50px 0;
`;

const HomeNavLink = styled(NavLink)`
  border: 2px solid darkslategray;
  background: white;
  border-radius: 10px;
  padding: .5rem;
  margin: 10px;
  text-decoration: none;
  font-size: 2rem;
  color: silver;
    -webkit-text-stroke-width: .25px;
    -webkit-text-stroke-color: black;
  font-family: 'Parisienne', cursive;
`;

const HomeNavButton = styled.button`
  


`;


export {HomeH1, HomeNavLink};