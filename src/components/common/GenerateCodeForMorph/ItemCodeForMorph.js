import { useEffect, useState } from 'react';

function getRandomChar(length, isNaN) {
	let result = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = "0123456789";
	const charactersLength = characters.length;
	const numbersLength = numbers.length;
	if (isNaN) {
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

export function ItemCodeForMorph({ char, idx, isStart }) {
	const [countGeneration, setCountGeneration] = useState(0);
	const [newChar, setNewChar] = useState(char);

	useEffect(() => {
		let handle;
		function start() {
      if(!isStart) return;

      if(countGeneration === idx) {
        clearTimeout(handle);
        setNewChar(char);
        return;
      }
			handle = setTimeout(myFunction, 75);
		}

		function myFunction() {
      setCountGeneration(c => c + 1);
      setNewChar(getRandomChar(1, isNaN(char)));
		}

		start();

		return () => clearTimeout(handle);
	}, [newChar, char, countGeneration, idx, isStart]);

	return <span>{newChar}</span>;
}
