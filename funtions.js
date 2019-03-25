const fs = require('fs');

const STUDENTS_LIST_FILENAME = 'students.json';

const loadStudentsList = () => {
  try {
    const data = fs.readFileSync(STUDENTS_LIST_FILENAME, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (error) {
    console.warn(`The next error happen ${error}`);
    return new Array();
  }
};

const persistStudentsList = (list) => {
  const data = JSON.stringify(list);
  fs.writeFile(STUDENTS_LIST_FILENAME, data, (error) => {
    if (error) {
      throw error;
    }

    console.info('Students persisted on disk');
  })
};

const createStudent = ({ name, math, english, programming }) => {
  const studentList = loadStudentsList();

  const studentExists = studentList.some((element) => element.name === name);
  if (studentExists) {
    console.error('Student already exists');
    return;
  }

  studentList.push({ name, math, english, programming });
  persistStudentsList(studentList);
};

const showStudents = () => {
  console.log('Student grades: ');

  const studentsList = loadStudentsList();
  console.table(studentsList);
};

const showStudent = (name) => {
  const student = loadStudentsList()
    .find(student => student.name === name);

  if (!student) {
    console.warn(`Student with name ${name} not found`);
    return;
  }

  console.table(student);
};

const showGoodMathStudents = () => {
  const students = loadStudentsList().filter(student => student.math >= 3);
  console.table(students);
};

const showAverageOfStudent = (name) => {
  const student = loadStudentsList()
    .find(element => element.name === name);

  if (!student) {
    console.warn(`Student with name ${name} not found`);
    return;
  }

  const average = (student.math + student.programming + student.english) / 3;

  console.log(`Average of student ${student.name}: ${average}`);
};

const studentsWithAverageUpThree = () => {
  const students = loadStudentsList()
    .map(student => {
      student.avg = (student.math + student.programming + student.english) / 3;
      return student;
    })
    .filter(student => student.avg >= 3);

  console.log('Students with average greater or equal than 3: ');
  console.table(students);
};

const updateStudent = ({ name, subject, grade }) => {
  const students = loadStudentsList();
  const student = students.find(element => element.name === name);
  if (!student) {
    console.warn(`Student with name ${name} not found`);
    return;
  }

  student[subject] = grade;
  persistStudentsList(students);
}

const removeStudent = (name) => {
  const students = loadStudentsList().filter(element => element.name !== name);
  console.log(students);

  persistStudentsList(students);
}

module.exports = {
  createStudent,
  showStudents,
  showStudent,
  showGoodMathStudents,
  showAverageOfStudent,
  studentsWithAverageUpThree,
  updateStudent,
  removeStudent,
};
