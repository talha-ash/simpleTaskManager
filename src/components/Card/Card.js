import React from "react";
import style from "./card.module.css";
const Card = ({ children }) => {
  return <div className={style.cardContainer}>{children}</div>;
};

export default Card;
