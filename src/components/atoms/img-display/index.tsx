import React from "react";
import style from "./ImgDisplay.module.scss";
import { ImgDisplayProps } from "../../../types/ImgDisplayTypes";

const ImgDisplay: React.FC<ImgDisplayProps> = ({ link, isFull }) => {
  return <img src={link} className={`${style.img} ${isFull ? style.full : ""}`} />;
};

export default ImgDisplay;
