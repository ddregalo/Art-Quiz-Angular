(function() {
  angular
    .module("artQuiz")
    .controller("resultsCtrl", resultsController);

    resultsController.$inject = ['quizMetrics'];

    function resultsController(quizMetrics) {
      var self = this;

      self.quizMetrics = quizMetrics;
    }
})();
