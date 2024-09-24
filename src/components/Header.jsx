import React from "react";
import styled from "@emotion/styled";
import { FaCat } from "react-icons/fa";

const Header = (props) => {
  return (
    <>
      <Title>🦊 {props.children} 🐾</Title>
      <LoginButton>
        <FaCat />
      </LoginButton>
    </>
  );
};

const Title = styled.h1`
  color: rosybrown;
`;

const LoginButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  font-size: 30px;
  color: steelblue;
  position: absolute;
  right: 300px;
  z-index: 1000;
`

export default Header;
