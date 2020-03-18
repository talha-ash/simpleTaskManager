import React from "react";

const Button = props => {
  const { title } = props;
  return (
    <button className={"w-100"} {...props}>
      {title}
    </button>
  );
};

export default Button;
