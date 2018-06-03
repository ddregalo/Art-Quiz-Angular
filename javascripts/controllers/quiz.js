(function() {
  angular
    .module("artQuiz")
    .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics'];

    function QuizController(quizMetrics){
      var self = this;
      self.quizMetrics = quizMetrics;
    }
})();
