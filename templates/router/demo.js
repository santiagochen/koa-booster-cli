module.exports = (app) =>{
  const { router, controller, middlewares } = app
  router.get('/',  controller.demo.t1 )
  router.get('/:id', middlewares.m2(), controller.demo.t2 )
}