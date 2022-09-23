import React from "react";
import classes from './style.module.scss';

export const Paragraph = React.forwardRef(({ children, style, className }, ref) => {
	return (
		<p
      className={`${classes.paragraph} ${className}`}
      style={{...style}}
      ref={ref}
    >
      {children}
		</p>
	);
});

export default Paragraph;
