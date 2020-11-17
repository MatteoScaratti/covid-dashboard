import {createGlobalStyle, keyframes} from "styled-components";

export const shareColor = {
    danger: '#f70003',
    success: '#6fb500',
    warning: '#ec6200',
};

export const darkTheme = {
    borderRadius: '4px',
    colors: {
        primary: '#ff70ee',
        background: '#19212a',
        backgroundLight: '#212b36',
        text: '#ffffff',
        textLight: '#a5b7c7',
        ...shareColor,
    },
};

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${darkTheme.colors.background};
    color: ${darkTheme.colors.text};
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
  }

  .container {
    max-width: 800px;
    margin: 0px auto 8rem auto;
    min-height: 100vh;
  }
  .center-text {
    text-align: center;
  }
  .app-logo{
    pointer-events: none;
    animation: ${spin} infinite 10s linear;
    g {
      fill: ${darkTheme.colors.primary}
    }
  }
`;

