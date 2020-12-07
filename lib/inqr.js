
const inquirer = require('inquirer');
const inqrConfig = require('../config/config.inqr');

module.exports = {
  
  create: (callback) => {
    inquirer.prompt([
      inqrConfig.mode,
      inqrConfig.mysql,
      inqrConfig.mysqlHostInput,
      inqrConfig.mysqlPortInput,
      inqrConfig.mysqlUserInput,
      inqrConfig.mysqlPwdInput,
      inqrConfig.redis,
      inqrConfig.redisHostInput,
      inqrConfig.redisPortInput,
      inqrConfig.redisUserInput,
      inqrConfig.redisPwdInput,
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
