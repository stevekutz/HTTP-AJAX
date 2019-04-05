import React from 'react';

class FriendForm extends React.Component{
  state = {
    friend: this.props.activeFriend || {
      name: '',
      age: '',
      email: '',

    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
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
        <h3>{`${this.props.activeFriend ? 'Update' : 'Add'} Friend`} </h3>
        <form onSubmit = {this.handleSubmit}>

          <input
            className = 'FriendFormInput'
            type = 'text'
            name = 'name'
            onChange = {this.changeHandler}
            placeholder = 'bestie goes here'
            value = {this.state.friend.name}

          />

          <input
            className = 'FriendFormInput'
            type = 'number'
            name = 'age'
            onChange = {this.changeHandler}
            placeholder = 'age goes here'
            value = {this.state.friend.age}

          />

          <input
            className = 'FriendFormInput'
            type = 'string'
            name = 'email'
            onChange = {this.changeHandler}
            placeholder = 'email goes here'
            value = {this.state.friend.email}

          />

          <button className = "FriendFormButton">
            {`${this.props.activeFriend 
              ? 'Update'
              : 'Add'
            } Friend `}

          </button>

        </form>

      </div>

    )

  }

}

export default FriendForm;