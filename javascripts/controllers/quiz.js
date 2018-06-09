(function() {
  angular
    .module("artQuiz")
    .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService'];

    function QuizController(quizMetrics, DataService){
      var qz = this;
      qz.quizMetrics = quizMetrics;
      qz.dataService = DataService;
      qz.activeQuestion = 0;
      qz.setActiveQuestion = setActiveQuestion;
      qz.questionAnswered = questionAnswered;
      qz.selectAnswer = selectAnswer;
      qz.finalizeAnswers = finalizeAnswers;
      qz.error = false;
      qz.finalize = false;

      var numQuestionsAnswered = 0;

      function setActiveQuestion (index) {
        if(index === undefined) {
          var breakOut = false;
          var quizLength = DataService.quizQuestions.length - 1;
          while (!breakOut) {
            qz.activeQuestion = qz.activeQuestion < quizLength ? ++qz.activeQuestion : 0;
            if (qz.activeQuestion === 0) {
              qz.error = true;
            }
            if (DataService.quizQuestions[qz.activeQuestion].selected === null) {
              breakOut = true;
            }
          }
        } else {
          qz.activeQuestion = index;
        }
      }

      function questionAnswered() {
        var quizLength = DataService.quizQuestions.length;
        if(DataService.quizQuestions[qz.activeQuestion.selected] !== null) {
          numQuestionsAnswered ++;
          if(numQuestionsAnswered >= quizLength) {
            // finalize quiz
            // var quizLength = DataService.quizQuestions.length;
            for (let i = 0; i < quizLength; i++) {
              if(DataService.quizQuestions[i].selected === null) {
                setActiveQuestion(i);
                return;
              }
            }
            console.log(`1 ${qz.finalize}`)
            qz.finalize = true;
            qz.error = false;
            console.log(`1 ${qz.finalize}`)

            return;
          }
        }
        qz.setActiveQuestion();
      }

      function selectAnswer(answerIndex) {
        DataService.quizQuestions[qz.activeQuestion].selected = answerIndex;
      }

      function finalizeAnswers() {
        qz.quizMetrics.changeState("quiz", false);
        qz.quizMetrics.changeState("results", true);
        qz.quizMetrics.markQuiz();
        qz.finalize = false;
        numQuestionsAnswered = 0;
        qz.activeQuestion = 0;
      }
    }
})();
