import React from 'react';
import {Link, NavLink} from 'react-router-dom';


import {
  HomeH1,
  HomeNavLink,


} from "./Styled/HomeStyled";



const Home = (props) => {

  return(
    <div>
      <HomeH1> Friends with HTTP-AJAX !!!</HomeH1>


      <NavLink to = "/friend-form">
        {`${props.activeFriend
            ? "Update"
            : "Add"
        } Friend`}
      </NavLink>

      <HomeNavLink exact to="/"> Home </HomeNavLink>
      <HomeNavLink to="/friend-list"> My Besties </HomeNavLink>

    </div>


  )


};


export default Home;