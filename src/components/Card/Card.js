import React from "react";

import styled from "styled-components";

const Card = ({ children, height, width, margin, padding, center, middle }) => {
  return (
    <CardContainer
      height={height || 26}
      width={width || 30}
      center={center}
      middle={middle}
      margin={margin}
      padding={padding}
    >
      {children}
    </CardContainer>
  );
};

export default Card;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
  width: 90%;
  height: ${props => props.height + "rem"};
  justify-content: ${props => (props.center ? "center" : "flex-start")};
  align-items: ${props => (props.middle ? "center" : "flex-start")};
  margin: ${props => (props.margin ? props.margin : "0rem")};
  padding: ${props => (props.padding ? props.padding : "2rem")};
  /* Medium (md) */
  @media (min-width: 768px) {
    width: ${props => props.width + "rem"};
  }

  /* Large (lg) */
  @media (min-width: 1024px) {
    width: ${props => props.width + "rem"};
  }

  /* Extra Large (xl) */
  @media (min-width: 1280px) {
    width: ${props => props.width + "rem"};
  }
`;
