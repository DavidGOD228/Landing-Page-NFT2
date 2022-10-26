import { Link } from 'react-router-dom';

import classes from './style.module.scss';

const NavItem = ({ link, title, activeSection }) => {
	return (
		<Link
			to={{ pathname: '/', hash: `${link}` }}
			className={`${classes.navItem} ${`#${activeSection}` === link && classes.active}`}
		>
			{title}
		</Link>
	);
};

export default NavItem;
