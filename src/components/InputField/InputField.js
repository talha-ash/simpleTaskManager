import React from "react";
import style from "./inputField.module.css";

const InputField = props => {
  return <input className={style.inputField + " " + "w-100 my-1"} {...props} />;
};

export default InputField;
