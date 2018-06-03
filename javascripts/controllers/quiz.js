(function() {
  angular
    .module("artQuiz")
    .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService'];

    function QuizController(quizMetrics, DataService){
      var self = this;
      self.quizMetrics = quizMetrics;
      self.dataService = DataService;
      self.activeQuestion = 0;
      self.questionAnswered = questionAnswered;

      function questionAnswered() {
        
      }
    }

})();
