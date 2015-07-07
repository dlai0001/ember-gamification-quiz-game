import Ember from 'ember';

export default Ember.Route.extend({

    renderTemplate: function() {
        this.render();
    },

    setupController: function(controller) {
        controller.set('questionBank', questions);
        controller.set('currentQuestion', questions[0]);
        controller.set('currentQuestionCount', 0);
    }
});

var questions = [
    {
        question: "11 How many pecks does it take to pick a pickle pepper (answer is A)",
        answer:"a",
        a:"answer 1",
        b:"answer 2",
        c:"answer 3",
        d:"answer 4"
    },
    {
        question: "22 How many pecks does it take to pick a pickle pepper (answer is A)",
        answer:"a",
        a:"answer 1",
        b:"answer 2",
        c:"answer 3",
        d:"answer 4"
    },
    {
        question: "33 How many pecks does it take to pick a pickle pepper (answer is A)",
        answer:"a",
        a:"answer 1",
        b:"answer 2",
        c:"answer 3",
        d:"answer 4"
    },
    {
        question: "44 How many pecks does it take to pick a pickle pepper (answer is A)",
        answer:"a",
        a:"answer 1",
        b:"answer 2",
        c:"answer 3",
        d:"answer 4"
    },

];