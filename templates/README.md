### <%- pkgName %>
- 框架使用手册
  - 使用
    1. 安装koa.js, 安装koa.boost.js
    2. 实例化
    ```
    const Koa = require('koa')
    const app = new Koa()
    module.exports = require('koa-boost')(app)
    ```
    3. 实例化的可选参数
    ```
    module.exports = require('koa-boost)(app, {
      //HOST
      host: '127.0.0.1', 
      //PORT
      port: 3001,
      //环境变量
      env: 'default',
      //静态开发目录
      static: [],
      //中间件
      middlewares: [
        require('koa-static')(
          path.join(process.cwd(), 'public'), {
            maxage: 1000 * 60 * 30
          }
        ),
        require('koa-body')(),
        require('koa-session')({
          store : null,
          key: '123'
        },app),
        require('./middlewares/h1')({name:'rename'}),
        require('./middlewares/h2')(),
      ],
    })
    ```
  - 项目目录
    - router 路由
    - controller 控制器
    - service 数据查询
    - middlewares 中间件
    - utils 工具模块
    - config 配置
    - public 静态文件目录
    - temp 临时文件
    - app.js
  - 上下文中引用模块: 
    > controller, service, utils, config
    ```
    ctx.{模块名称}.{方法名}()

    ctx.{模块名称}.{变量名}
    ```
    