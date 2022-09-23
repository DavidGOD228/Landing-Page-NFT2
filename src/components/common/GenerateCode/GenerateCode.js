import { ItemCode } from './ItemCode';

export function GenerateCode({ children }) {
	return (
		<div style={{ textTransform: 'uppercase' }}>
			{children.split('').map((char, idx) => (
				<ItemCode key={Math.random() + idx + char} char={char} />
			))}
		</div>
	);
}
