import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from '../assets/corona-logo.svg';

const StyledContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 0;
`;

const StyledTitle = styled.h1`
  font-size: 1.5em;
  margin-bottom: 0.1rem;
`;

const StyledSubTitle = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

const StyledLogo = styled(Logo)`
  height: 120px;
  width: 120px;
  fill: #00000;
  opacity: 0.5;
`;

const Header = () =>  (
      <StyledContainer>
        <StyledLogo className="app-logo" />
        <StyledTitle>Covid-19 Dashboard</StyledTitle>
        <StyledSubTitle>
          Matteo Scaratti (Pink Team > Codermine)
        </StyledSubTitle>
      </StyledContainer>
);

export default Header;