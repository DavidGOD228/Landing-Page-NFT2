import { ItemCodeForMorph } from './ItemCodeForMorph';
import { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";

export function GenerateCodeForMorph({ children }) {
  const [isStart, seIsStart] = useState(false);

		return (
		<div style={{ textTransform: 'uppercase' }}>
			{children.split('').map((char, idx) => (
				<VisibilitySensor
					onChange={() => seIsStart(true)}
					delayedCall
					key={Math.random() + idx + char}
				>
				<ItemCodeForMorph char={char} idx={idx} isStart={isStart} />
				</VisibilitySensor>
			))}
		</div>
	);
}
