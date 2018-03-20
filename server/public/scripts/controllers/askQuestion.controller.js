myApp.controller('AskQuestionController', ['UserService', function(UserService) {
    console.log('AskQuestionController created');
    var self = this;
    self.userService = UserService;
  }]);