

var Main = require('../serverControllers/main.js')

module.exports = function(app){
  app.get('/', Main.main)
  app.get('/contact', Main.contact)
  app.get('/algorithms', Main.algorithms)
  app.get('/projects', Main.projects)
  app.use(Main.other)
}

// *******************End*******************
