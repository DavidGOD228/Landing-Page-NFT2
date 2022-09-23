import { ItemCodeForMorph } from './ItemCodeForMorph';

export function GenerateCodeForMorph({ children }) {
	return (
		<div style={{ textTransform: 'uppercase' }}>
			{children.split('').map((char, idx) => (
				<ItemCodeForMorph key={Math.random() + idx + char} char={char} idx={idx}  />
			))}
		</div>
	);
}
