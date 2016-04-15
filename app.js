var app = angular.module('myModule', ['ngRoute']); //defines a module

app.controller('myController', function(){
  });

app.config(function($routeProvider){
  $routeProvider
    .when('/dog',
    {
      controller: 'myController',
      templateUrl: 'dog.html'
    })
    .when('/cat',
  {
    controller: 'myController',
    templateUrl: 'cat.html'
  })
  .otherwise ({redirectTo: '/'});
});
