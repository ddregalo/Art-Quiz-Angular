(function() {
  angular
    .module("artQuiz")
    .controller("resultsCtrl", resultsController);

    resultsController.$inject = ['quizMetrics', 'DataService'];

    function resultsController(quizMetrics, DataService) {
      var qz = this;

      qz.quizMetrics = quizMetrics;
      qz.dataService = DataService;
    }
})();
