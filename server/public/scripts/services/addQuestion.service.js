myApp.service('AddQuestionService', ['$http', function ($http) {
        console.log('AddQuestionService Loaded');

        var self = this;

        self.getQuestion=function () {
            $http.get('/games').then(function (response) { //naming game?
                console.log('got item', response);
                self.games.list = response.data;
                })
        }




        self.addQuestion=function (newQuestion) {
            console.log('add question button clicked');
            console.log('newQuestion');
            $http.post('/gamename', newQuestion).then(function (response) {
                console.log('post item', response);
                self.getQuestion();
            })
        }






//Example from Power Pup
// myApp.service('DogService', ['$http', function ($http) {
//     console.log('DogService Loaded');
   
//     var self = this;
//     //var filestackAPIKey = AaN98nhRTamCfV3Suca0Zz;
//     self.dogs = {list: []};
//     self.currentDog={details:{}};


//         self.getDog=function () {
//             $http.get('/dog').then(function (response) { //just naming dog
//                 console.log('got item', response);
//                 self.dogs.list = response.data;
//             })
//         }

//         self.addDog=function (newDog) {
//             console.log('button clicked');
//             console.log(newDog);
//             $http.post('/dog', newDog).then(function (response) {
//                 console.log('post item', response);
//                 self.getDog();
//             })
//         }

//         self.getDetails = function(dogId){
//             $http({
//                 method: 'GET',
//                 url: '/dog/details',
//                 params: {
//                     id: dogId
//                 }
//             }).then(function(response){
//                 self.currentDog.details = response.data;
//                 console.log('details gotten')
//             });
//         }; 
        
//         self.updateTraining = function(command){
//             $http({
//                 method: 'PUT',
//                 url: '/dog/details',
//                 data: command, 
//             }).then(function(response){
//                 console.log('update received')
//                 self.getDetails(command.dog_id);
//             });
//         }; 

//         self.deleteDog = function(dogId){
//             console.log('delete button clicked');
//             $http({
//                 method: 'DELETE',
//                 url: '/dog/' + dogId
//             }).then(function (response){
//             self.getDog();    
//             });
//         };   



// self.getDetails();

        
// }]);