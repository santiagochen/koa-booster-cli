
const inquirer = require('inquirer');
const inqrConfig = require('../config/config.inqr');

module.exports = {
  create: (callback) => {
    inquirer.prompt([
      /* inqrConfig.framework,
      inqrConfig.quality,
      inqrConfig.isyun, */
    ]).then((answers) => {
      if (callback) {
        callback(answers);
      }
    }).catch((error) => {
      console.error(error);
      if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      } else {
      // Something else when wrong
      }
    });
  }
};
