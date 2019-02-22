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

    componentDidMount() {
        const logged = !!localStorage.getItem('loggedIn');
        this.setState({
            loggedIn: logged,
        })
    }

    componentDidUpdate() {
        console.log()
        const logged= !!localStorage.getItem('loggedIn');
        if (this.state.loggedIn !== logged)
        this.setState({
            loggedIn: logged,
        })
    }

    render() {
      if(this.state.loggedIn) {
          return <App {...this.props}/>
      } else {
          return <Login {...this.props} login={this.login}/>
      }
    }
  };
}
