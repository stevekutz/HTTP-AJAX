import React from 'react';



import {
  HomeDiv,
  HomeNavLinkDiv,
  HomeH1,
  HomeNavLink,


} from "./Styled/HomeStyled";

/*
         {`${props.activeFriend
            ? "Update"
            : "Add"
            } Friend`}
*/


const Home = () => {

  return(
    <HomeDiv>
      <HomeH1> Friends with HTTP-AJAX !!!</HomeH1>


      <HomeNavLinkDiv>
        <HomeNavLink exact to="/"> Home </HomeNavLink>
        <HomeNavLink to="/friend-list"> My Besties </HomeNavLink>

        <HomeNavLink to = "/friend-form"> Add Friend </HomeNavLink>

      </HomeNavLinkDiv>



    </HomeDiv>


  )


};


export default Home;