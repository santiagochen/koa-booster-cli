
module.exports = {
  app(options) {
    return Object.assign(app, options);
  },
  pkg(options) {
    return Object.assign(apk, options);
  },
};

const app = {
  host: "127.0.0.1",
  port: 3000,
};

const apk = {
  pkgName: process.cwd().split('/').slice(-1)[0],
};
