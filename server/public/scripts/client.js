var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')
  $routeProvider
    .when('/', {
      redirectTo: 'askQuestion' //was home
    })
    .when('/askQuestion', {
      templateUrl: '/views/templates/askQuestion.html',
      controller: 'AskQuestionController as askqc',
    })
    .when('/addQuestion', {
      templateUrl: '/views/templates/addQuestion.html',
      controller: 'AddQuestionController as addqc'
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as ic',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/answerResults', {
      templateUrl: '/views/templates/answerResults.html',
      controller: 'AnswerResultsController as answerrc'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController as hc'
    })


    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
