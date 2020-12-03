
module.exports = {
  framework: {
    name: 'framework',
    type: 'list',
    message: '选择框架:',
    default: 'koa',
    choices: [
      { name: 'koa', value: 'koa' },
      // { name: 'bubble', value: 'bubble' },
      // { name: 'egg', value: 'egg' },
    ].map(data => ({
      name: data.name,
      value: data.value,
      short: `框架 : ${data.value}`,
    })),
  },
  quality: {
    name: 'quality',
    type: 'checkbox',
    message: '代码规范与质量检查功能:',
    choices: [
      { name: '使用eslint', value: 'eslint' },
      { name: '使用chew', value: 'chew' },
      { name: '使用husky', value: 'husky' },
    ].map(data => ({
      name: data.name,
      value: data.value,
      short: `已选择了${data.value}`,
    })),
  },
  isyun: {
    name: 'isyun',
    type: 'confirm',
    message: '是否适配云图:',
    choices: [
      { name: '普通项目', value: 0 },
      { name: '适配云图', value: 1 },
    ].map(data => ({
      name: data.name,
      value: data.value,
      short: `是否适配云图 : ${data.value}`,
    })),
  },
  noteGitRemote: {
    name: 'noteGitRemote',
    type: 'input',
    message: function (answers) {
      return `输入远程GIT仓库地址(可后续设置): `;
  }
  }

};


