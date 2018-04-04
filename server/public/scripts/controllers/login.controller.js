// myApp.controller('LoginController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
//     console.log('LoginController created');
//     var self = this;
//     self.user = {
//       username: '',
//       password: ''
//     };
//     self.message = '';

//     self.login = function () {
//       if (self.user.username === '' || self.user.password === '') {
//         self.message = "Enter your username and password!";
//       } else {
//         console.log('sending to server...', self.user);
//         $http.post('/api/user/login', self.user).then(
//           function (response) {
//             if (response.status == 200) {
//               console.log('success: ', response.data);
//               // location works with SPA (ng-route)
//               $location.path('/user');
//             } else {
//               console.log('failure error: ', response);
//               self.message = "Incorrect credentials. Please try again.";
//             }
//           },
//           function (response) {
//             console.log('failure error: ', response);
//             self.message = "Incorrect credentials. Please try again.";
//           });
//       }
//     };

//     self.registerUser = function () {
//       if (self.user.username === '' || self.user.password === '') {
//         self.message = "Choose a username and password!";
//       } else {
//         console.log('sending to server...', self.user);
//         $http.post('/api/user/register', self.user).then(function (response) {
//           console.log('success');
//           $location.path('/home');
//         },
//           function (response) {
//             console.log('error');
//             self.message = "Something went wrong. Please try again."
//           });
//       }
//     }
// }]);

myApp.controller('LoginController', function($http, $location, UserService) {
  console.log('LoginController created');
  var vm = this;
  vm.user = {
    username: '',
    password: ''
  };
  vm.message = '';

  vm.login = function() {
    console.log('LoginController -- login');
    if(vm.user.username === '' || vm.user.password === '') {
      vm.message = "Enter your username and password!";
    } else {
      console.log('LoginController -- login -- sending to server...', vm.user);
      $http.post('/', vm.user).then(function(response) {
        if(response.data.username) {
          console.log('LoginController -- login -- success: ', response.data);
          // location works with SPA (ng-route)
          $location.path('/user'); // http://localhost:5000/#/user
        } else {
          console.log('LoginController -- login -- failure: ', response);
          vm.message = "Wrong!!";
        }
      }).catch(function(response){
        console.log('LoginController -- registerUser -- failure: ', response);
        vm.message = "Wrong!!";
      });
    }
  };

  vm.registerUser = function() {
    console.log('LoginController -- registerUser');
    if(vm.user.username === '' || vm.user.password === '') {
      vm.message = "Choose a username and password!";
    } else {
      console.log('LoginController -- registerUser -- sending to server...', vm.user);
      $http.post('/register', vm.user).then(function(response) {
        console.log('LoginController -- registerUser -- success');
        $location.path('/home');
      }).catch(function(response) {
        console.log('LoginController -- registerUser -- error');
        vm.message = "Please try again." 
      });
    }
  }
});