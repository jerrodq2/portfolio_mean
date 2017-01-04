var app = angular.module('algorithmApp', ['ngRoute'])

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);


app.config(function ($routeProvider) {
$routeProvider
  .when('/bst_main', {
    templateUrl: 'partials/bst.html'
  }).when('/bst_height', {
    templateUrl: 'partials/bst_height.html'
  }).when('/insertion', {
    templateUrl: 'partials/insertion.html'
  }).when('/triangle', {
    templateUrl: 'partials/triangle.html'
  }).when('/reverse_vowel', {
    templateUrl: 'partials/reverse_vowel.html'
  }).when('/recursive_binary', {
    templateUrl: 'partials/rBinary.html'
  }).when('/binary', {
    templateUrl: 'partials/binary.html'
  }).when('/recursive_fib', {
    templateUrl: 'partials/rFib.html'
  }).when('/fib', {
    templateUrl: 'partials/fib.html'
  })
  .otherwise('/bst_main')
})


// *******************End*******************
