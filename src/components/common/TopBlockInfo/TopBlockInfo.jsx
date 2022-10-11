import React from 'react';

import {InfoContainer} from "../InfoContainer/InfoContainer";

import Metamorph from "assets/images/metamorph.svg"

import {useWindowWidth} from "hooks/useWindowWidth";

import classes from './style.module.scss'

export const TopBlockInfo = ({title, date}) => {
  const isDesktop = useWindowWidth(769)
  return (
    <>
      <div className={classes.topBlock}>
        {!isDesktop ? <img className={classes.metamorph} src={Metamorph} alt="Metamorph"/> : null}
        <InfoContainer>
          <div className={classes.titleContainer}>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.date}>Effective date: {date}</p>
          </div>
        </InfoContainer>
      </div>
    </>
  );
};

