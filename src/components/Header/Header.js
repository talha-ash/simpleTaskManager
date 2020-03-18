import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
const HeaderBar = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 8rem 3rem 8rem;
  height: 8vh;
  background-color: var(--secondary-bg-color);
  border-top: 1px solid #41414145;
  -webkit-box-shadow: 0px 12px 15px 1px rgba(199, 199, 199, 1);
  -moz-box-shadow: 0px 12px 15px 1px rgba(199, 199, 199, 1);
  box-shadow: 0px 12px 15px 1px rgba(199, 199, 199, 1);

  @media (max-width: 768px) {
    padding: 3rem 2rem 3rem 2rem;
  }
`;
const LogoutBtn = styled.h3`
  cursor: pointer;
`;
const HeaderLeft = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const UserName = styled.h2`
  text-transform: capitalize;
  margin-left: 1rem;
`;

const Header = ({ handleLogout, name, imageUrl }) => {
  return (
    <HeaderBar>
      <HeaderLeft>
        <Avatar imageUrl={imageUrl} />
        <UserName>{name}</UserName>
      </HeaderLeft>
      <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
    </HeaderBar>
  );
};

export default Header;
