// const validator = require('validator');
const chalk = require('chalk');


// console.log(validator.isEmail('sham@email.com'));

const msg = chalk`Lorem ipsum dolor {bgRed.blue sit amet} consectetur {bgGreen adipisicing} elit. Veniam, dolore?`
console.log(msg);
//console.log(chalk.blue('Hello world!'));
