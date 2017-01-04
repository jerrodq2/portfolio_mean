var app = angular.module('projectApp', ['ngRoute'])

app.config(function ($routeProvider) {

$routeProvider
  .when('/red_ribbon', {
    Url: 'https://54.191.149.203/'
  })
  .otherwise('/red_ribbon')
})


// *******************End*******************
