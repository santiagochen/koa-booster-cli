
const path = require('path');
const configLocals = require('../config/config.tmpl');
const {
  mkdir,
  write,
  exit,
  confirm,
  isDirectoryEmpty,
  loadTemplate,
  copy,
  emptyDir
} = require('./utils');

const createApplication = function (name, dir /* options */) {
  if (dir !== '.') {
    mkdir(dir, '.');
  }
  // 目录
  mkdir(dir, 'router')
  mkdir(dir, 'controller');
  mkdir(dir, 'service');
  mkdir(dir, 'utils');
  mkdir(dir, 'middlewares');
  mkdir(dir, 'config');
  // if(options)

  // package.json
  const pkgFile = loadTemplate('../templates/package.js', configLocals.pkg());
  write(path.join(dir, 'package.json'), pkgFile.render());
  // app.js
  const app = loadTemplate('../templates/app.js', configLocals.app());
  write(path.join(dir, 'app.js'), app.render());
  // .gitignore
  copy(path.join(__dirname, '../templates/gitignore.txt'), path.join(process.cwd(), './.gitignore'));
  // router
  copy(path.join(__dirname, '../templates/router'), path.join(process.cwd(), './router'));
  // controller
  copy(path.join(__dirname, '../templates/controller'), path.join(process.cwd(), './controller'));
  // service
  copy(path.join(__dirname, '../templates/service'), path.join(process.cwd(), './service'));
  //utils
  copy(path.join(__dirname, '../templates/utils'), path.join(process.cwd(), './utils'))
  //config
  copy(path.join(__dirname, '../templates/config'), path.join(process.cwd(), './config'))
  //middlewares
  copy(path.join(__dirname, '../templates/middlewares'), path.join(process.cwd(), './middlewares'))
};

module.exports = function (appName, options) {
  const destinationPath = appName;

  isDirectoryEmpty(destinationPath, (empty) => {
    if (empty || options.force) {
      createApplication(appName, destinationPath, options);
    } else {
      confirm('该目录中已经存在内容, 是否继续? [y/N] ', (ok) => {
        if (ok) {
          process.stdin.destroy();
          emptyDir(destinationPath)
          createApplication(appName, destinationPath, options);
        } else {
          console.warn('操作已取消');
          exit(1);
        }
      });
    }
  });
};
