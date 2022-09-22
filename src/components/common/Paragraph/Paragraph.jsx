import classes from './style.module.scss';

export const Paragraph = ({ children, style, className }) => {
	return (
		<p
      className={`${classes.paragraph} ${className}`}
      style={{...style}}
    >
      {children}
		</p>
	);
};

export default Paragraph;
