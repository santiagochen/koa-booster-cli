module.exports = (app) =>{
  const { router, controller } = app
  router.get('/',  controller.sample.func1 ) //to define sample before restart server
}