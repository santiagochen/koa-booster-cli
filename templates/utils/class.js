module.exports = (app)=>({
  getRandomInRange(range){
    return parseInt( Math.random() * range )
  }
})