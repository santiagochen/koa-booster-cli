module.exports = ()=>({
  async t1(ctx){
    try {
      let data = await ctx.service.demo.t1()
      ctx.body = {
        globalMidName:ctx.globalMidName,
        privateMidName: ctx.privateMidName,
        classGrp: data
      }
    } catch (error) {
      console.error(error)
    }
  },
  async t2(ctx){
    try {
      let data = await ctx.service.demo.t2(parseInt(ctx.params.id))
      let item = ctx.utils.helper.find( ctx.config.classInfo, (o)=>o.id==parseInt(ctx.params.id))
      ctx.body = {
        globalMidName:ctx.globalMidName,
        privateMidName: ctx.privateMidName,
        className: item?item.name:"no record",
        classMates: data
      }
    } catch (error) {
      console.error(error)
    }
  }
})