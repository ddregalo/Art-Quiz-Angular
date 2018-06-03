(function() {
  angular
    .module("artQuiz")
    .factory("quizMetrics", QuizMetrics);
    // other types of angular services are: service, provider
    function QuizMetrics() {
      var quizObj = {
        quizActive: false,
        changeState: changeState
      };

      return quizObj;

      function changeState(state) {
        quizObj.quizActive = state;
      }
    }

})();
