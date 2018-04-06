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
      controller: 'AskQuestionController as vm',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as vm'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/askQuestion', {
      templateUrl: '/views/templates/askQuestion.html',
      controller: 'AskQuestionController as vm'
    })
    .when('/answerResults', {
      templateUrl: '/views/templates/answerResults.html',
      controller: 'AnswerResultsController as vm'
    })




    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
