import React from "react";
import styled from "styled-components";
const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  background: #ff9224;
  border-radius: 8px;
  color: white;
  min-width: 120px;
  font-family: "Noto Sans TC", sans-serif;
  font-weight: bold;
  padding: 8px 0;
  margin: 2rem 0;
  &:hover {
    background: #bb5e00;
  }
`;

const Logout = styled.button`
  background: #ff9224;
  border-radius: 8px;
  color: white;
  min-width: 50px;
  font-family: "Noto Sans TC", sans-serif;
  font-weight: bold;
  padding: 6px 0;
  margin: 2rem 0;
  &:hover {
    background: #bb5e00;
  }
`;

const Footer = ({ handleDeleteAllProp, numOfRemainingProp }) => (
  <Container>
    <p>剩餘項目: {numOfRemainingProp}</p>
    <Button className="btn-reset" onClick={handleDeleteAllProp}>
      一鍵清除已完成
    </Button>
    <Logout className="btn-reset">登出</Logout>
  </Container>
);

export default Footer;
