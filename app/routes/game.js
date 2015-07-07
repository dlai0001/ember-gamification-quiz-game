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
        question: "What is (enterprise) gamification?",
        answer:"b",
        a:"Using games to facilitate team building exercises",
        b:"Using gaming elements in a professional work environment to motivate employees",
        c:"Rewarding the work team for a job well done by playing X-Box as a team on friday nights",
        d:"Using gambling theory to estimate likelihood of an employee finishing on time.",
        mastered: false
    },
    {
        question: "What are 3 core elements of Gamification?",
        answer:"c",
        a:"Rewards, Motivation, and Engagement Loops",
        b:"Feedback, Status, and Random Chance",
        c:"Rewards, Feedback loops, and engagement loops.",
        d:"Points, Leaderboards, and Badges",
        mastered: false
    },
    {
        question: "When was Gamification first coined? By whom?",
        answer:"d",
        a:"Kevn Werbach, a Professor at Wharton Business School, first mentioned the word in this book 'For The Win', 2004",
        b:"Kevn Werbach, a Professor at Wharton Business School, first mentioned the word in this book 'For The Win', 2010",
        c:"Nick Pelling, a British games programmer and inventory, first mentioned the word 2008.",
        d:"Nick Pelling, a British games programmer and inventory, first mentioned the word 2002.",
        mastered: false
    },
    {
        question: "According to survey by the Aberdeen Group, Gamification improved employee engagement by what percent? Turnover percent?",
        answer:"a",
        a:"48% Improved engagement. 36% turnover.",
        b:"36% Improved engagement. 48% turnover.",
        c:"24% Improved engagement. 36% turnover.",
        d:"24% Improved engagement. 48% turnover.",
        mastered: false
    },

];