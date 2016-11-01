import React from 'react';
import { logout } from '../../util/session_api_util';
import merge from 'lodash/merge';
import $ from 'jquery';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    $("button.logout").on('click', e => this.props.logout(e));
  }

  render() {
    console.log("Rendering greeting");
    debugger
    if (this.props.currentUser) {
      return (
        <div>
          Welcome {this.props.currentUser.username}
          <button to className="logout">Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <a className="signup" href="/#/signup">Sign Up</a>
          <br/>
          <a className="signin" href="/#/login">Login</a>
        </div>
      );
    }
  }
}

export default Greeting;
