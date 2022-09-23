import { useEffect, useState } from 'react';

function getRandomChar(length, char) {
	let result = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const numbers = "0123456789";
	const charactersLength = characters.length;
	const numbersLength = numbers.length;
	if (isNaN(char)) {
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
	} else {
    for (var j = 0; j < length; j++) {
			result += numbers.charAt(Math.floor(Math.random() * numbersLength));
		}
  }

	return result;
}

export function ItemCode({ char }) {
	const [newChar, setNewChar] = useState(char);
 
	useEffect(() => {
		let handle;
		function start() {
			var min = 0.15,
				max = 0.45;
			var rand = Math.random() * (max - min + 1) + min;
			handle = setTimeout(myFunction, rand * 1000);
		}

		function myFunction() {
			setNewChar(getRandomChar(1, char));
		}

		start();

		return () => clearTimeout(handle);
	}, [newChar, char]);

	return <span>{newChar}</span>;
}
