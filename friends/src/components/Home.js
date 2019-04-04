import React from 'react';
import {Link, NavLink} from 'react-router-dom';


import {
  HomeH1,
  HomeNavLink,


} from "./Styled/HomeStyled";



const Home = () => {

  return(
    <div>
      <HomeH1> Friends with HTTP-AJAX !!!</HomeH1>

      <HomeNavLink exact to="/"> Home </HomeNavLink>
      <HomeNavLink to="/friend-list"> My Besties </HomeNavLink>

    </div>


  )


};


export default Home;