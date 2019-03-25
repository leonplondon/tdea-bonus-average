const yargs = require('yargs');

const cli = require('./commands');
const functions = require('./funtions');

const { COMMAND } = cli;

const args = yargs
  .command(COMMAND.createStudent, 'Create a new student', cli.createStudent)
  .command(COMMAND.showAll, 'Show all students')
  .command(COMMAND.showStudent, 'Show student\'s information', cli.showStudent)
  .command(COMMAND.showAverageOfStudent, 'Show student average grade', cli.showAverageOfStudent)
  .command(COMMAND.studentsAverage, 'Show students with an average grade of 3 or upper')
  .command(COMMAND.updateStudent, 'Update a student', cli.updateStudent)
  .command(COMMAND.removeStudent, 'Remove a student', cli.removeStudent)
  .argv

const inputCommand = args._[0];

switch (inputCommand) {
  case COMMAND.createStudent:
    functions.createStudent(args);
    break;

  case COMMAND.showAll:
    functions.showStudents();
    break;

  case COMMAND.showStudent:
    functions.showStudent(args.name);
    break;

  case COMMAND.showAverageOfStudent:
    functions.showAverageOfStudent(args.name);
    break;

  case COMMAND.studentsAverage:
    functions.studentsWithAverageUpThree();
    break;

  case COMMAND.updateStudent:
    functions.updateStudent(args);
    break;

  case COMMAND.removeStudent:
    console.log(args.name);

    functions.removeStudent(args.name);
    break;

}
