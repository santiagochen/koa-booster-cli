
module.exports = {
  mode:{
    name: 'mode',
    type: 'list',
    message: 'Choose mode to create:',
    default: 'easy',
    choices: [
      { name: 'fast', value: 'fast' },
      { name: 'advanced', value: 'advanced' }
    ].map(data => ({
      name: data.name,
      value: data.value,
      short: `create mode : ${data.value}`,
    })),
  },
  mysql:{
    name:"mysql",
    type:"confirm",
    message: "Need Mysql?",
    when:function(resp){
      return resp.mode == "advanced"
    }
  },
  mysqlHostInput:{
    name:"mysqlHostInput",
    type:"input",
    message: "Input Mysql Host: ",
    when:function(resp){
      return resp.mysql
    }
  },
  mysqlPortInput:{
    name:"mysqlPortInput",
    type:"input",
    message: "Input Mysql Port: ",
    when:function(resp){
      return resp.mysql
    }
  },
  mysqlUserInput:{
    name:"mysqlUserInput",
    type:"input",
    message: "Input Mysql UserName: ",
    when:function(resp){
      return resp.mysql
    }
  },
  mysqlPwdInput:{
    name:"mysqlPwdInput",
    type:"input",
    message: "Input Mysql Password: ",
    when:function(resp){
      return resp.mysql
    }
  },
  redis:{
    name:"redis",
    type:"confirm",
    message: "Need Redis?",
    when:function(resp){
      return resp.mode == "advanced"
    }
  },
  redisHostInput:{
    name:"redisHostInput",
    type:"input",
    message: "Input Redis Host: ",
    when:function(resp){
      return resp.redis
    }
  },
  redisPortInput:{
    name:"redisPortInput",
    type:"input",
    message: "Input Redis Port: ",
    when:function(resp){
      return resp.redis
    }
  },
  redisUserInput:{
    name:"redisUserInput",
    type:"input",
    message: "Input Redis UserName: ",
    when:function(resp){
      return resp.redis
    }
  },
  redisPwdInput:{
    name:"redisPwdInput",
    type:"input",
    message: "Input Redis Password: ",
    when:function(resp){
      return resp.redis
    }
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
  }

};


