module.exports = (app)=>({
  t1(){
    return app.utils.helper.map( app.config.classInfo, "name" )
  },
  t2(id){
    return app.utils.helper.find( app.config.classInfo, (o)=>o.id==id )
  }
})