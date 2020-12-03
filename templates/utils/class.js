const _ = require('underscore')
module.exports = (app)=>({
  getClassById(id){
    return _.findWhere( app.config.classInfo, { id: id } )
  }
})