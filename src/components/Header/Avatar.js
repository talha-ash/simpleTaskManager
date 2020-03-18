import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
`;

const Avatar = ({ imageUrl }) => {
  return (
    <Image
      src={"https://dev.teledirectasia.com:3092" + imageUrl}
      alt="User Avatar"
      posi
    />
  );
};

export default Avatar;
