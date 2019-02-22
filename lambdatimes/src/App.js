import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import authenticate from './Authenticate/Authenticate';
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
};

const WrappedApp = authenticate(App,Login);

export default WrappedApp;
