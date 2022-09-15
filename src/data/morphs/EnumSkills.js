const sillsName = {
  logicMathematics: 'Logic/mathematics',
  creativity: 'Creativity',
  athletics: 'Athletics',
  leadership: 'Leadership',
  resourcefulness: 'Resourcefulness',
  socialization: 'Socialization',
}

class EnumSkills {
  constructor({ logicMathematics, creativity, athletics, leadership, resourcefulness, socialization }) {
    this.logicMathematics = logicMathematics;
    this.creativity = creativity;
    this.athletics = athletics;
    this.leadership = leadership;
    this.resourcefulness = resourcefulness;
    this.socialization = socialization;
  }
}

export default new EnumSkills({ ...sillsName })