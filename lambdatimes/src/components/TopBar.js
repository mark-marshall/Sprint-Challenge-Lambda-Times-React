import React from 'react';
import styled from 'styled-components';

// Styled-Components
const TopBarStyles = styled.div`
  width: 100%;
  position: fixed;
  height: 44px;
  background-color: #333;
  font-size: 9px;
  margin-right: 0;
  text-decoration: underline;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TopBarContainer = styled.div`
  width: 100%;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  margin-right: 0;
  text-decoration: underline;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TopBarContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const TopBarSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
  cursor: pointer;
  margin-right: 5%;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const TopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  cursor: pointer;
  margin-right: 0;
  text-decoration: underline;
`;

const TopBarContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyles>
      <TopBarContainer>
        <TopBarContainerLeft>
          <TopBarSpan>TOPICS</TopBarSpan>
          <TopBarSpan>SEARCH</TopBarSpan>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <TopBarSpan>GENERAL</TopBarSpan>
          <TopBarSpan>BROWNBAG</TopBarSpan>
          <TopBarSpan>RANDOM</TopBarSpan>
          <TopBarSpan>MUSIC</TopBarSpan>
          <TopBarSpan>ANNOUNCEMENTS</TopBarSpan>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <TopBarSpan>LOG IN</TopBarSpan>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarStyles>
  );
};

export default TopBar;
