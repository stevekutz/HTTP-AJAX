import React from 'react';
import {Link, NavLink} from 'react-router-dom';


import {MainAppH1} from "./Styled/MainApp_Styled";


/*
      <NavLink to = "/friend-form">
        {`${this.state.activeFriend
          ? 'Add'
          : 'Update'
          } Friend`}
      </NavLink>
 */

const Home = () => {

  return(
    <nav>
      <MainAppH1> Friends with HTTP-AJAX !!!</MainAppH1>

      <NavLink exact to="/"> Home </NavLink>
      <NavLink to="/friend-list"> My Besties </NavLink>

    </nav>


  )


};


export default Home;