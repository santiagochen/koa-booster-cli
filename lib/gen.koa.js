
const path = require('path');
const configLocals = require('../config/config.tmpl');
const {
  mkdir,
  write,
  exit,
  confirm,
  isDirectoryEmpty,
  isFileExist,
  removeFile,
  loadTemplate,
  copy,
  emptyDir
} = require('./utils');

const createApplication = function (name, dir) {
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
  copy(path.join(__dirname, '../templates/gitignore.txt'), path.join(dir, './.gitignore'));
  // router
  copy(path.join(__dirname, '../templates/router'), path.join(dir, './router'));
  // controller
  copy(path.join(__dirname, '../templates/controller'), path.join(dir, './controller'));
  // service
  copy(path.join(__dirname, '../templates/service'), path.join(dir, './service'));
  //utils
  copy(path.join(__dirname, '../templates/utils'), path.join(dir, './utils'))
  //config
  copy(path.join(__dirname, '../templates/config'), path.join(dir, './config'))
  //middlewares
  copy(path.join(__dirname, '../templates/middlewares'), path.join(dir, './middlewares'))
};


const createPart = function(part, name){
  copy(path.join(__dirname, `../templates/generator/${part}.js`), path.join(`${part}`, `./${name}.js`));
}


module.exports = {
  create: function (appName, options, /* resp */) {
    const destinationPath = appName;
    isDirectoryEmpty(destinationPath, (empty) => {
      if (empty || options.force) {
        createApplication(appName, destinationPath, options);
      } else {
        confirm('该目录中已经存在内容, 是否保留之前文件? [y/N] ', (ok) => {
          if (ok) {
            process.stdin.destroy();
            createApplication(appName, destinationPath, options);
          } else {
            process.stdin.destroy();
            emptyDir(destinationPath)
            createApplication(appName, destinationPath, options);
            // console.warn('操作已取消');
            // exit(1);
          }
        });
      }
    });
  },
  generate: function (part, name, options) {
    const destinationPath = `./${part}/${name}.js`;
    isFileExist(destinationPath, (empty)=>{
      if (empty || options.force) {
        createPart(part, name, options);
      } else {
        confirm('该文件中已经存在, 是否保留之前文件? [y/N] ', (ok) => {
          if (ok) {
            process.stdin.destroy();
            createPart(part, name, options);
          } else {
            process.stdin.destroy();
            removeFile(destinationPath)
            createPart(part, name, options);
            // console.warn('操作已取消');
            // exit(1);
          }
        });
      }
    })
  }
};
