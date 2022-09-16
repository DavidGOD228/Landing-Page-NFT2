// method 'replaceJSX' in string: https://stackoverflow.com/questions/30474506/replace-part-of-string-with-tag-in-jsx
// declare as prototype: https://stackoverflow.com/questions/47630632/react-where-to-extend-object-prototype

const dot = idx => (
	<span key={idx} style={{ fontFamily: 'sans-serif' }}>
		.
	</span>
);
const replaceDot = str => {
	return str.split('.').flatMap((item, i, arr) => {
		const isLastChar = i === arr.length - 1;
		return !isLastChar ? [item, dot(i), ' '] : item;
	});
};

export default replaceDot;
