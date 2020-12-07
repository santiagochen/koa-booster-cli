module.exports = ()=>({
  async sample(ctx){
    try {
      ctx.body = 'sample'
    } catch (error) {
      console.error(error)
    }
  }
})