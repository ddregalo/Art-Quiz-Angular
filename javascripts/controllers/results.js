(function() {
  angular
    .module("artQuiz")
    .controller("resultsCtrl", resultsController);

    resultsController.$inject = ['quizMetrics', 'DataService'];

    function resultsController(quizMetrics, DataService) {
      var qz = this;

      qz.quizMetrics = quizMetrics;
      qz.dataService = DataService;
      qz.activeQuestion = 0;
      qz.getAnswerClass = getAnswerClass;
      qz.setActiveQuestion = setActiveQuestion;
      qz.calculatePercentage = calculatePercentage;
      qz.reset = reset;

      function getAnswerClass(answerIndex) {
          if(answerIndex === quizMetrics.correctAnswers[qz.activeQuestion]) {
          return "bg-success";
        } else if(answerIndex === DataService.quizQuestions[qz.activeQuestion].selected) {
          return "bg-danger";
        }
      }

      function setActiveQuestion(questionIndex) {
        qz.activeQuestion = questionIndex;
      }

      function calculatePercentage() {
        return qz.quizMetrics.numQuestionsCorrect / qz.dataService.quizQuestions.length * 100
      }

      function reset() {
        qz.quizMetrics.changeState("results", false);
        qz.quizMetrics.numCorrect = 0;
        for(var i = 0; i < qz.dataService.quizQuestions.length; i++) {
          var data = qz.dataService.quizQuestions[i];
          data.selected = null;
          data.correct = null;
        }
      }
    }
})();
