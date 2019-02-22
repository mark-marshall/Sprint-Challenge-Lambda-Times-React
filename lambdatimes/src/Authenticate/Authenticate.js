import React from 'react';

export default function authenticate(App, Login) {
  return class Authenticate extends React.Component {
    state = {
      loggedIn: false
    };

    login = () => {
      localStorage.setItem('loggedIn', 'true');
      this.setState({
          loggedIn: true,
      })
    };

    //ComponentDidMountHere
    //ComponeentDidUnmountHere

    render() {
      if(this.state.loggedIn) {
          return <App {...this.props}/>
      } else {
          return <Login {...this.props} login={this.login}/>
      }
    }
  };
}
