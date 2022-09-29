import { ItemCodeForMorph } from './ItemCodeForMorph';
import { useState } from 'react';

export function GenerateCodeForMorph({ children }) {
  const [isStart, seIsStart] = useState(false);

  setTimeout(() => seIsStart(true), 1200);

	return (
		<div style={{ textTransform: 'uppercase' }}>
			{children.split('').map((char, idx) => (
				<ItemCodeForMorph key={Math.random() + idx + char} char={char} idx={idx} isStart={isStart} />
			))}
		</div>
	);
}
