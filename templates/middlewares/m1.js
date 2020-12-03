module.exports = (options)=>{
  return async (ctx, next)=>{
    ctx.globalMidName = `Global Mid Name : ${options.name}`
    await next()
  }
}