import Ember from 'ember';

var playSuccess = window.playSuccess;
var playError = window.playError;

export default
Ember.Controller.extend({
    currentQuestionCount: 0,
    currentQuestion: null,
    questionBank: null,

    //current question status
    isAnswered: false,
    isWrong: false,

    streak: 0,

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
        this.set("currentQuestion", questions[currentCount % questions.length]);

        this.set("isAnswered", false);
        this.set("isWrong", false);
    },

    checkQuestion: function (answer) {
        var result = answer === this.get('currentQuestion').answer;
        this.set("isWrong", !result);

        if (result) {
            this.get('currentQuestion').mastered = true;
            playSuccess();
        } else {
            this.get('currentQuestion').mastered = false;
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

        this.applyBadges(result, player);
    },

    calculatePercentMastery: function () {
        var count = 0;
        var questionsInQuestionBank = this.get('questionBank');
        for (var i = 0; i < questionsInQuestionBank.length; i++) {
            if (questionsInQuestionBank[i].mastered) {
                count++;
            }
        }
        return count / questionsInQuestionBank.length;
    },

    applyBadges: function(result, player) {
        console.log("apply badges to ", result);

        // baby steps
        this.controllerFor("achievements").set("babysteps",true);

        //check accurancy badge
        if(player.get("answered") >= 5 && player.get("right") === player.get("answered")) {
            this.controllerFor("achievements").set("oneHunderedPercentAccurate",true);
        } else {
            this.controllerFor("achievements").set("oneHunderedPercentAccurate",false);
        }

        //check streak badges
        var streak;
        if(result) {
            streak = this.incrementProperty("streak");
        } else {
            this.set("streak", 0);
            streak = 0;
        }
        if(streak >= 3) {
            this.controllerFor("achievements").set("threeInARow",true);
        } else {
            this.controllerFor("achievements").set("threeInARow",false);
        }

        //check 50% & 100% badges
        if(player.get("percentMastery") >= 1) {
            this.controllerFor("achievements").set("masteredOneHundred",true);
        } else if (player.get("percentMastery") >= 0.5) {
            this.controllerFor("achievements").set("masteredFifty",true);
        }

    }
});
