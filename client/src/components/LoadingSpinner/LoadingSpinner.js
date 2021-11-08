import React from "react";
import Loader from "react-loader-spinner";

import s from "./LoadingSpinner.module.scss";

export const LoadingSpinner = () => {
  return (
    <div className={s.loader}>
      <div className={s.loader__wrapper}>
        <Loader
          type="Oval"
          color="#A587FF"
          height={70}
          width={70}
          timeout={10000}
        />
      </div>
    </div>
  );
};
