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
      self.setActiveQuestion = setActiveQuestion;
      self.questionAnswered = questionAnswered;
      self.selectAnswer = selectAnswer;
      self.error = false;
      self.finalize = false;

      var numQuestionsAnswered = 0;

      function setActiveQuestion (index) {
        if(index === undefined) {
          var breakOut = false;
          var quizLength = DataService.quizQuestions.length - 1;
          while (!breakOut) {
            self.activeQuestion = self.activeQuestion < quizLength ? ++self.activeQuestion : 0;
            if (self.activeQuestion === 0) {
              self.error = true;
            }
            if (DataService.quizQuestions[self.activeQuestion].selected === null) {
              breakOut = true;
            }
          }
        } else {
          self.activeQuestion = index;
        }
      }

      function questionAnswered() {
        var quizLength = DataService.quizQuestions.length;
        if(DataService.quizQuestions[self.activeQuestion.selected] !== null) {
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
            console.log(`1 ${self.finalize}`)
            self.finalize = true;
            self.error = false;
            console.log(`1 ${self.finalize}`)

            return;
          }
        }
        self.setActiveQuestion();
      }

      function selectAnswer(answerIndex) {
        DataService.quizQuestions[self.activeQuestion].selected = answerIndex;
      }
    }
})();
