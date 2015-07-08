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
        question: "What is (enterprise) Gamification?",
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
        c:"Rewards, Feedback Loops, and Engagement Loops.",
        d:"Points, Leaderboards, and Prizes",
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
        b:"76% Improved engagement. 48% turnover.",
        c:"14% Improved engagement. 76% turnover.",
        d:"36% Improved engagement. 48% turnover.",
        mastered: false
    },
    {
        question: "Which company has made leadership training addictive?",
        answer:"c",
        a:"SAP ",
        b:"Khan Academy",
        c:"Deloitte",
        d:"McDonalds",
        mastered: false
    },
    {
        question: "100% of its employees submit their travel expenses after which company gamified their travel expense system?",
        answer:"a",
        a:"Google",
        b:"Ziprecruiter",
        c:"Verizon",
        d:"IBM",
        mastered: false
    },
    {
        question: "This company saw 80% of employees participate in at least one of its gamified 'wellvolution' programs?",
        answer:"c",
        a:"Nike",
        b:"IBM",
        c:"Blue Shield/Blue Cross",
        d:"SAP",
        mastered: false
    },
    {
        question: "What is the term used to describe when players start resenting the game due to their external rewards tied to the game system?",
        answer:"b",
        a:"Player-game resentment",
        b:"Gamification backlash",
        c:"Extrinsic reward overload",
        d:"Intrinsic-Extrinsic dissonance",
        mastered: false
    },
    {
        question: "What are the 3 basic needs according to Self Determination Theory (SDT)?",
        answer:"b",
        a:"Rewards, Competence, and Relatedness",
        b:"Competence, Relatedness, and Autonomy",
        c:"Rewards, Relatedness, and Autonomy",
        d:"Rewards, Competence, and Autonomy",
        mastered: false
    },
    {
        question: "Why shouldn't you tie extrinsic rewards as part of your Gamification program?",
        answer:"a",
        a:"In the long run, may cause resentment of the game.",
        b:"It encourages workplace devious behavior",
        c:"Because virtual points are free, rewards cost money",
        d:"It increases scrutiny of your company to gambling regulations",
        mastered: false
    }

];