module.exports = {
  createStudent: {
    name: { alias: 'n', demand: true },
    math: { alias: 'm', demand: true },
    english: { alias: 'e', demand: true },
    programming: { alias: 'p', demand: true },
  },
  removeStudent: {
    name: { alias: 'n', demand: true },
  },
  showStudent: {
    name: { alias: 'n', demand: true },
  },
  showAverageOfStudent: {
    name: { alias: 'n', demand: true },
  },
  updateStudent: {
    name: { alias: 'n', demand: true },
    subject: { alias: 's', demand: true },
    grade: { alias: 'g', demand: true },
  },
  COMMAND: {
    createStudent: 'createStudent',
    showAll: 'showAll',
    showStudent: 'showStudent',
    showAverageOfStudent: 'showAverageOfStudent',
    studentsAverage: 'studentsAverage',
    updateStudent: 'updateStudent',
    removeStudent: 'removeStudent',
  }
};
