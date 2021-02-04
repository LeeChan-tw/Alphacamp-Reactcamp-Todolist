import React from "react";
import styled from "styled-components";
const FakeButton = styled.a`
  border-radius: 8px;
  padding: 0.5rem 0;
  font-family: "Noto Sans TC", sans-serif;
  text-align: center;
  text-decoration: none;
  width: 7rem;
  background: #ff9224;
  color: white;
  &:hover {
    background: #bb5e00;
  }
`;
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Header = () => {
  return (
    <Container>
      <h3>Tasks</h3>
      <FakeButton
        href="https://codesandbox.io/s/react-demo-forked-e6xt2?file=/src/db.json"
        target="_blank"
        rel="noreferrer">
        Json-Server Codesandbox
      </FakeButton>
    </Container>
  );
};

export default Header;
