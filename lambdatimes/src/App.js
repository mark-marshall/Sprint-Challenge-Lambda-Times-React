import React from 'react';
import ContentRender from './components/Content/ContentRender';
import  authenticate from './Authenticate/Authenticate';
import Login from './components/Login';

const App = () => {
  return (
    <div>
    <ContentRender />
    </div>
  );
};

const WrappedApp = authenticate(App,Login);

export default WrappedApp;
