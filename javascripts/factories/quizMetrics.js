(function() {
  angular
    .module("artQuiz")
    .factory("quizMetrics", QuizMetrics);
    // other types of angular services are: service, provider

    QuizMetrics.$inject = ['DataService'];

    function QuizMetrics(DataService) {
      var quizObj = {
        quizActive: false,
        changeState: changeState,
        resultsActive: false,
        correctAnswers: [],
        markQuiz: markQuiz,
        numQuestionsCorrect: 0
      };

      return quizObj;

      function changeState(metric, state) {
        if (metric === "quiz") {
          quizObj.quizActive = state;
        } else if (metric === "results") {
          quizObj.resultsActive = state;
        } else {
          return false;
        }
      }

      function markQuiz() {
        quizObj.correctAnswers = DataService.correctAnswers
        for(var i = 0; i < DataService.quizQuestions.length; i++) {
          if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]) {
            DataService.quizQuestions[i].correct = true;
            quizObj.numQuestionsCorrect++;
          } else {
            DataService.quizQuestions[i].correct = false;
          }
        }
      }
    }

})();
