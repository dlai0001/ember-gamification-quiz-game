import Ember from 'ember';

export default Ember.Controller.extend({
    currentQuestionCount:0,
    currentQuestion:null,
    questionBank: null,

    //current question status
    isAnswered: false,
    isWrong: false,

    actions: {
        answerQuestion: function(answer) {
            console.log("answer question", answer);

            this.checkQuestion(answer);

            this.set("isAnswered", true);

            Ember.run.later((function() {
                this.nextQuestion();
            }.bind(this)), 1000);
        }
    },

    nextQuestion: function() {
        var currentCount = this.incrementProperty('currentQuestionCount');
        var questions = this.get("questionBank");
        this.set("currentQuestion", questions[currentCount % questions.length])

        this.set("isAnswered", false);
        this.set("isWrong", false);
    },

    checkQuestion: function(answer) {
        var result = answer == this.get('currentQuestion').answer;
        this.set("isWrong", !result);
        return result;
    },

    updateScore: function(result) {
        console.log("TODO: increment player score");

        console.log("TODO: handle adding badges");
    }
});
