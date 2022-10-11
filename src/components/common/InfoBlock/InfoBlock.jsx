import React from 'react';

import {InfoContainer} from "../InfoContainer/InfoContainer";

import classes from './style.module.scss';

const InfoBlock = ({title, children, className}) => {
  return (
    <div className={`${classes.container} ${className}`}>
      <InfoContainer>
        <h3 className={classes.title}>{title}</h3>
        {children}
      </InfoContainer>
    </div>
  );
};

export default InfoBlock;
