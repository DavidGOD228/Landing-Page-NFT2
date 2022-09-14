import React from "react";

import Title from "../../../common/Title/Title";
import Phone from "../../../common/Phone/Phone";

import classes from "./style.module.scss";

const Slider = ({sliderData, titleMargin, phoneMargin}) => {
  return (
    <div className={classes.slider}>
      <div className={classes.row} style={{marginLeft: titleMargin}}>
        {sliderData.map(({title}, i) => (
          <Title key={i} classname={classes.title}>{title}</Title>
        ))}
      </div>
      <div className={classes.row} style={{marginLeft: phoneMargin}}>
        {sliderData.map((_, idx) => (
          <Phone key={idx} classname={classes.phone} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
