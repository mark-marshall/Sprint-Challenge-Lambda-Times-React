import React from 'react';

export default function authenticate(App, Login) {
  return class Authenticate extends React.Component {
    state = {
      loggedIn: false
    };

// onClick login function to be passed to Login Component
    login = () => {
      localStorage.setItem('loggedIn', 'true');
      this.setState({
          loggedIn: true,
      })
    };

    componentDidMount() {
        const logged = !!localStorage.getItem('loggedIn');
        this.setState({
            loggedIn: logged,
        })
    }

//  This is irrelevent as no state is stored on App.JS so CDU will never fire
    /*componentDidUpdate() {
        console.log()
        const logged= !!localStorage.getItem('loggedIn');
        if (this.state.loggedIn !== logged)
        this.setState({
            loggedIn: logged,
        })
    }
    */

// conditionally render Login or App dependending on wether loggedIn key exists in localstorage
    render() {
      if(this.state.loggedIn) {
          return <App {...this.props}/>
      } else {
          return <Login {...this.props} login={this.login}/>
      }
    }
  };
}
