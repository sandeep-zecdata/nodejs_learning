const logger = require('./logger/index')

logger.warn("warn Information");
logger.info("info Information");
logger.debug("debug Information");

// class Cube {
//     constructor(length) {
//     this.length = length;
//     }
    
//     getSideLength () {
//     return this.length;
//     }
    
//     getSurfaceArea () {
//     return (this.length * this.length) * 6;
//     }
    
//     getVolume () {
//     return Math.pow(this.length,3);
//     }
//     }
    
//     module.exports = {
//     Cube:Cube
//     }