

var Main = require('../serverControllers/main.js')

module.exports = function(app){
  app.get('/', Main.main)
}

// *******************End*******************
