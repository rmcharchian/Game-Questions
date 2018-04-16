myApp.controller('HomeController', ['UserService', function(UserService) {
    console.log('HomeController created');
    var self = this;
    self.userService = UserService;
  }]);
