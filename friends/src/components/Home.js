import React from 'react';



import {
  HomeH1,
  HomeNavLink,


} from "./Styled/HomeStyled";



const Home = (props) => {

  return(
    <div>
      <HomeH1> Friends with HTTP-AJAX !!!</HomeH1>




      <HomeNavLink exact to="/"> Home </HomeNavLink>
      <HomeNavLink to="/friend-list"> My Besties </HomeNavLink>

      <HomeNavLink to = "/friend-form">
        {`${props.activeFriend
          ? "Update"
          : "Add"
          } Friend`}
      </HomeNavLink>


    </div>


  )


};


export default Home;