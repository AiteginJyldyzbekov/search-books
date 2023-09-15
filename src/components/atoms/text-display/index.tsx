import React from "react";
import style from "./TextDisplay.module.scss";
import { TextDisplayProps } from "../../../types/TextDisplayTypes";

const TextDisplay: React.FC<TextDisplayProps> = ({ children }) => {
  return <p className={style.text}>{children}</p>;
};

export default TextDisplay;
