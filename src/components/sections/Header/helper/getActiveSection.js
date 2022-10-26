/**
 * @param {number} scrollPosition 
 * @param {{ id: string, finish: number, start: number }[]} positionSections 
 * @returns {string}
 */
const getActiveSection = (scrollPosition, positionSections) => {
  for(const section in positionSections) {
    const start = positionSections[section].start;
    const finish = positionSections[section].finish;
    if(scrollPosition > start && scrollPosition < finish) {
      return positionSections[section].id;
    }
  }
}

export default getActiveSection;