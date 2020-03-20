import React from "react";
import styled from "styled-components";

export default props => {
  const { title } = props;
  return <Button {...props}>{title}</Button>;
};

const Button = styled.button`
  width: 90%;
  margin: 2rem;
  padding: ${props => (props.padding ? props.padding : "0rem")};
  @media (min-width: 786px) {
    width: ${props => (props.small ? "12rem" : "100%")};
    margin: ${props => (props.margin ? props.margin : "2rem")};
  }
`;
