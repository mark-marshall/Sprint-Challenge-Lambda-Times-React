import React from 'react';
import TopBar from '../TopBar';
import Header from '../Header';
import Content from './Content';

const ContentRender = () => {
    return (
      <div className="App">
        <TopBar />
        <Header />
        <Content />
      </div>
    );
  };
  
  export default ContentRender;
  