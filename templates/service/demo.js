module.exports = (app)=>({
  t1(){
    return app.utils.helper.pluck( app.config.classInfo, "name" )
  },
  t2(id){
    return app.utils.helper.findWhere( app.config.classInfo, {id: id} )
  }
})