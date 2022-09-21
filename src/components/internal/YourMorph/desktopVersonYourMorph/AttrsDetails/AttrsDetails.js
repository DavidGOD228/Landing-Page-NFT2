import classes from './style.module.scss';
import { Attr } from 'components';

export function AttrsDetails({ attributes, className, type, ...props }) {
	const mapAttrs = attributes.map(attr => (
		<Attr key={attr.id} name={attr.name} precent={attr.precent} type={type} />
	));
	return (
		<div className={`${classes.attrs} ${className}`} {...props}>
			{mapAttrs}
		</div>
	);
}
