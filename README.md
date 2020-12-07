### koa-booster-cli
Koa-booster module give you a better experience in developing with the sample thought of Koa: pure, clean, and strong enough to extend whatever you want.
- Usage
  - Step 1
  ```
  npm i -g koa-booster-cli
  ```
  - Step 2
  ```
  koa-booster create {projectName}
  //or you can do it either
  mkdir {projectName} && cd {projectName}
  koa-booster create .
  ```
  - Step 3 

  ```
  cd {projectName} && npm i
  npm run start
  ```
- Alias: 
  - koa-booster: ```kb```
  - create: ```c```
  - generate: ```g```
  ```
  koa-booster create {projectName}
  ```
  or(RIP Kobe Bryant) 
  ```
  kb c {projectName} 
  ```
  ```
  kb generate {moduleName} 
  ```
  ```
  kb g {moduleName} 
  ```
- Cli List
  - kb create {projectName}
  ```
  kb create app1  
  kb c app1
  ```
  - kb generate {moduleName} 
  > moduleName include: router, controller, service, utils, config, middlewares
  ```
  kb generate controller books
  kb g service books
  kb g config books
  ```
- Related Doc [koa-booster](https://www.npmjs.com/package/koa-booster)