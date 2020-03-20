import React from "react";
import styled from "styled-components";

const InputField = props => {
  return <Input {...props} />;
};

export default InputField;

const Input = styled.input`
  background-color: var(--input-bg-color);
  height: 5rem;
  padding: 1rem;
  width: 90%;
  border: none;
  border-color: transparent;
  border-radius: 1rem;
  outline: none;
  font-size: 1.6rem;
  margin: 1rem 0 1rem 0;

  @media (min-width: 786px) {
    width: ${props => props.width || "100%"};
  }
`;
