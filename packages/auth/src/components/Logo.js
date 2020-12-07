import React from 'react';
import logo from '../assets/images/logo.svg';
import LogoContainer from '../styles/LogoContainer';

const Logo = () => {
  return (
    <LogoContainer>
      <img alt="logo" src={logo} />
    </LogoContainer>
  );
};

export default Logo;
