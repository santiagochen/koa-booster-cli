const path = require('path');
const util = require('util');
const readline = require('readline');
const mkdirp = require('mkdirp');
const fs = require('fs-extra');
const ejs = require('ejs');
const MODE_0666 = parseInt('0666', 8);
const MODE_0755 = parseInt('0755', 8);
const gexit = process.exit;

module.exports = {

  copy: (source, dest) => {
    try {
      fs.copySync(source, dest);
    } catch (err) {
      console.error(err);
    }
  },

  write: (file, str, mode) => {
    try {
      fs.writeFileSync(file, str, { mode: mode || MODE_0666 });
      // console.log('   \x1b[36mcreate\x1b[0m : ' + file)
    } catch (error) {
      console.error(err);
    }
  },

  mkdir: (base, dir) => {
    try {
      const loc = path.join(base, dir);
      // console.log('   \x1b[36mcreate\x1b[0m : ' + loc + path.sep)
      mkdirp.sync(loc, MODE_0755);
    } catch (err) {
      console.error(err);
    }
    
  },

  exit: (code) => {
    function done() {
      if (!(draining - 1)) gexit(code);
    }

    let draining = 0;
    const streams = [process.stdout, process.stderr];

    streams.forEach((stream) => {
      // submit empty write request and wait for completion
      draining += 1;
      stream.write('', done);
    });

    done();
  },

  confirm: (msg, callback) => {
    try {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
  
      rl.question(msg, (input) => {
        rl.close();
        callback(/^y|yes|ok|true$/i.test(input));
      });
    } catch (err) {
      console.error(err);
    }
  },

  isDirectoryEmpty: (dir, fn) => {
    try {
      fs.readdir(dir, (err, files) => {
        if (err && err.code !== 'ENOENT') throw err;
        fn(!files || !files.length);
      });
    } catch (err) {
      console.error(err);
    }
  },

  emptyDir: (dir)=>{
    try {
      fs.emptyDirSync(dir, {preserveTimestamps:true})
    } catch (err) {
      console.error(err);
    }
  },

  loadTemplate: (name, localsOpt = false) => {
    const contents = fs.readFileSync(path.join(__dirname, '..', 'templates', (`${name}.ejs`)), 'utf-8');
    const locals = Object.assign(Object.create(null), localsOpt);

    function render() {
      return ejs.render(contents, locals, {
        escape: util.inspect,
      });
    }

    return {
      locals,
      render,
    };
  },

};
