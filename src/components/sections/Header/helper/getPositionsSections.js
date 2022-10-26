/**
 * @param {string[]} ids
 * @returns {object{id: { start: number, finish: number }}}
 */
const getPositionsSections = ids => {
	const positions = {};

	ids.forEach(id => {
		const section = document.getElementById(id);
    if(!section) return;

		const	sectionHeight = section.offsetHeight,
			sectionFinish = section.offsetTop + sectionHeight / 1.71,
			sectionStart = section.offsetTop - sectionHeight / 2.5;

		positions[id] = { id, start: sectionStart, finish: sectionFinish };
	});
	return positions;
};

export default getPositionsSections;
