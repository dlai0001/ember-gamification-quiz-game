import Ember from 'ember';

export default
Ember.Controller.extend({
    currentQuestionCount: 0,
    currentQuestion: null,
    questionBank: null,

    //current question status
    isAnswered: false,
    isWrong: false,

    actions: {
        answerQuestion: function (answer) {
            console.log("answer question", answer);

            var result = this.checkQuestion(answer);

            this.set("isAnswered", true);

            this.updateScore(result);

            Ember.run.later((function () {
                this.nextQuestion();
            }.bind(this)), 1000);
        }
    },

    nextQuestion: function () {
        var currentCount = this.incrementProperty('currentQuestionCount');
        var questions = this.get("questionBank");
        this.set("currentQuestion", questions[currentCount % questions.length])

        this.set("isAnswered", false);
        this.set("isWrong", false);
    },

    checkQuestion: function (answer) {
        var result = answer == this.get('currentQuestion').answer;
        this.set("isWrong", !result);

        if (result) {
            this.get('currentQuestion').mastered = true;
            playSuccess();
        } else {
            playError();
        }

        return result;
    },

    updateScore: function (result) {
        var player = this.get("player");
        player.incrementProperty('answered');
        if (result) {
            player.incrementProperty('right');
        }
        var percentMastery = this.calculatePercentMastery();
        player.set('percentMastery', percentMastery);
        player.save();

        console.log("TODO: handle adding badges");
    },

    calculatePercentMastery: function () {
        debugger;
        var count = 0;
        var questionsInQuestionBank = this.get('questionBank');
        for (var i=0; i<questionsInQuestionBank.length; i++) {
            if (questionsInQuestionBank[i].mastered) {
                count++;
            }
        }
        return count / questionsInQuestionBank.length;
    }
});
