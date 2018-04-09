myApp.controller('AddQuestionController', ['UserService', function(UserService) {
    console.log('AddQuestionController created');
    var self = this;
    self.userService = UserService;
  }]);