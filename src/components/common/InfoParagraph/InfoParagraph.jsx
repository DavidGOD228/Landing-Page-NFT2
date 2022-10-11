import React from 'react';

import classes from './style.module.scss';

const InfoParagraph = ({children, style}) => {
  return (
    <div style={style} className={classes.paragraph}>
      {children}
    </div>
  );
};

export default InfoParagraph;
