myApp.service('AnswerResultsService', ['$http', function ($http) {
    console.log('AnswerResultsService Loaded');

    var self = this;

    self.answerResult=function () {
        $location.path('/askQuestion')
            console.log('redirected to askQuestion.html');
    }




    // self.addQuestion=function (newQuestion) {
    //     console.log('add question button clicked');
    //     console.log('newQuestion');
    //     $http.post('/gamename', newQuestion).then(function (response) {
    //         console.log('post item', response);
    //         self.getQuestion();
    //     })
    // }