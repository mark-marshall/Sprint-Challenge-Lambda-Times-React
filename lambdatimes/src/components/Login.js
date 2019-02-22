import React from 'react';
import styled from 'styled-components';

// Styled-Components
const HeaderStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  allign-items: center;

  button {
    background-color: black;
    text-transform: uppercase;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: 1 px solid white;
    color: white;
    margin-top: 430px;
    font-size: 18px;

    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
`;

export default function Login({ login }) {
  return (
    <HeaderStyles>
      <button onClick={login}>Log In</button>
    </HeaderStyles>
  );
}
