import React from 'react';
// import {Route} from 'react-router-dom'; // for subroutes later


import {
  FriendH3Title,
  FormFriend,
  FormButton,
  FormInput,
  FormInputNarrow,

} from '../Styled/FriendContainerStyled';



class FriendForm extends React.Component{
  state = {
    friend: this.props.activeFriend || {
      name: '',
      age: '',
      email: '',

    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">>>>> CDU prevProps", prevProps);
    console.log(">>>>> CDU prevState", prevState);
    console.log(">>>>> CDU snapshot", snapshot);

/*
  this.props.activeFriend && prevProps.activeFriend
          !== this.props.activeFriend

 */

/*
      this.props.activeFriend !== this.props.activeFriend
        &&
      prevProps.activeFriend !== this.props.activeFriend
        &&
      prevState.friend !== this.props.activeFriend
 */

    if(
      this.props.activeFriend && prevProps.activeFriend
      !== this.props.activeFriend

    ) {
      this.setState({
        friend: this.props.activeFriend
      })
    }

  }

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    if(ev.target.name === 'age') {
      value = parseInt(value, 10);
    }

    // use prevSTATE !!!!!!
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [ev.target.name]: value
      }
    }))

  };

  handleSubmit = e => {
    if(this.props.activeFriend) {
      this.props.updateFriend(e, this.state.friend)
    } else {
      this.props.addFriend(e, this.state.friend)
    }
    this.setState({
      friend: {
        name: '',
        age: '',
        email: '',

      }


    })
  };

  render() {
    return(
      <div>
        <FriendH3Title>{`${this.props.activeFriend ? 'Update Current' : 'Add A New '} Friend`} </FriendH3Title>
        <FormFriend onSubmit = {this.handleSubmit}>

          <FormInput
            inputColor = "dodgerblue"
            type = 'text'
            name = 'name'
            onChange = {this.changeHandler}
            placeholder = 'bestie name'
            value = {this.state.friend.name}

          />

          <FormInputNarrow
            inputColor = "rebeccapurple"
            type = 'number'
            name = 'age'
            onChange = {this.changeHandler}
            placeholder = 'bestie age'
            value = {this.state.friend.age}

          />

          <FormInput
            inputColor = "seagreen"
            type = 'string'
            name = 'email'
            onChange = {this.changeHandler}
            placeholder = 'bestie email'
            value = {this.state.friend.email}

          />

          <FormButton className = "FriendFormButton">
            {`${this.props.activeFriend 
              ? 'Update'
              : 'Add'
            } Friend `}

          </FormButton>

        </FormFriend>


      </div>

    )

  }

}

export default FriendForm;