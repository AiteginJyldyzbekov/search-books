import React from "react";
import style from "./Preloader.module.scss";
import { PreloaderProps } from "../../../types/PreloaderTypes";

const Preloader: React.FC<PreloaderProps> = ({ full }) => {
  return (
    <div className={full ? style.wrapper : style.pad}>
      <div className={style.container}>
        <svg className={style.loader} viewBox="0 0 340 340">
          <circle
            className={style.circle}
            cx="170"
            cy="170"
            r="160"
            stroke="#C3C3C3"
          />
          <circle
            className={style.circle}
            cx="170"
            cy="170"
            r="135"
            stroke="#3B636F"
          />
          <circle
            className={style.circle}
            cx="170"
            cy="170"
            r="110"
            stroke="#C3C3C3"
          />
          <circle
            className={style.circle}
            cx="170"
            cy="170"
            r="85"
            stroke="#3B636F"
          />
        </svg>
      </div>
    </div>
  );
};

export default React.memo(Preloader);
