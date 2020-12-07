import React from 'react';
import styled from 'styled-components';
import LogoContainer from './LogoContainer';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  ${LogoContainer} {
    margin-bottom: 16px;
  }

  .MuiPaper-root {
    padding: 32px;
  }
`;

export default LoginContainer;
