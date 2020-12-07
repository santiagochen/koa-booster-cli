module.exports = ()=>{
  return async (ctx, next)=>{
    //define what you want to pipe in here
    await next()
  }
}