myApp.controller('AnswerResultsController', ['UserService', function(UserService) {
    console.log('AnswerResultsController created');
    var self = this;
    self.userService = UserService;
  }]);