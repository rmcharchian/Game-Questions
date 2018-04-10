myApp.controller('AddQuestionController', ['UserService', function(UserService) {
    console.log('AddQuestionController created');
    var self = this;
    self.userService = UserService;
  }]);

//example from Power Pup
//   myApp.controller('DogController', function(DogService, UserService) {
//     console.log('DogController created');
//     var vm = this;

//     vm.addDog = function (newDog){
//       DogService.addDog(newDog);
//       console.log(newDog);
//     }
//     vm.dogs = DogService.dogs;

//     DogService.getDog();

//     vm.logout = function (){
// UserService.logout();
// DogService.currentDog=[];
//     };
//   });