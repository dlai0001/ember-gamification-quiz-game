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
    //1
    {
        question: "What is (enterprise) Gamification?",
        answer:"b",
        a:"Using games to facilitate team building exercises",
        b:"Using gaming elements in a professional work environment to motivate employees",
        c:"Rewarding the work team for a job well done by playing X-Box as a team on friday nights",
        d:"Using gambling theory to estimate likelihood of an employee finishing on time.",
        mastered: false
    },
    //2
    {
        question: "What are 3 core elements of Gamification?",
        answer:"c",
        a:"Rewards, Motivation, and Engagement Loops",
        b:"Feedback, Status, and Random Chance",
        c:"Rewards, Feedback Loops, and Engagement Loops.",
        d:"Points, Leaderboards, and Prizes",
        mastered: false
    },
    //3
    {
        question: "When was Gamification first coined? By whom?",
        answer:"d",
        a:"Kevn Werbach, a Professor at Wharton Business School, first mentioned the word in this book 'For The Win', 2004",
        b:"Kevn Werbach, a Professor at Wharton Business School, first mentioned the word in this book 'For The Win', 2010",
        c:"Nick Pelling, a British games programmer and inventory, first mentioned the word 2008.",
        d:"Nick Pelling, a British games programmer and inventory, first mentioned the word 2002.",
        mastered: false
    },
    //4
    {
        question: "According to survey by the Aberdeen Group, Gamification improved employee engagement by what percent? Turnover percent?",
        answer:"a",
        a:"48% Improved engagement. 36% turnover.",
        b:"76% Improved engagement. 48% turnover.",
        c:"14% Improved engagement. 76% turnover.",
        d:"36% Improved engagement. 48% turnover.",
        mastered: false
    },
    //5
    {
        question: "Which company has made leadership training addictive?",
        answer:"c",
        a:"SAP ",
        b:"Khan Academy",
        c:"Deloitte",
        d:"McDonalds",
        mastered: false
    },
    //6
    {
        question: "Which billionaire playboy is Batman's alter ego?",
        answer:"d",
        a:"Bill Gates",
        b:"Dick Grayson",
        c:"Michael Keaton",
        d:"Bruce Wayne",
        mastered: false
    },
    //7
    {
        question: "100% of its employees submit their travel expenses after which company gamified their travel expense system?",
        answer:"a",
        a:"Google",
        b:"Ziprecruiter",
        c:"Verizon",
        d:"IBM",
        mastered: false
    },
    //8
    {
        question: "This company saw 80% of employees participate in at least one of its gamified 'wellvolution' programs?",
        answer:"c",
        a:"Nike",
        b:"IBM",
        c:"Blue Shield/Blue Cross",
        d:"SAP",
        mastered: false
    },
    //9
    {
        question: "From the batcave, how many miles is it to Gotham City?",
        answer:"c",
        a:"1",
        b:"5",
        c:"14",
        d:"20",
        mastered: false
    },
    //10
    {
        question: "In the 1960’s Batman TV Series, What famous person’s bust (statue) did Alfred use to open the bookcase and expose the Bat-poles?",
        answer:"a",
        a:"Shakespeare",
        b:"Caesar",
        c:"George Washington",
        d:"Abraham Lincoln",
        mastered: false
    },
    //11
    {
        question: "By 2018, how large is the Gamification market projected to be?",
        answer:"c",
        a:"500 million",
        b:"1 billion",
        c:"5 billion",
        d:"20 billion",
        mastered: false
    }

];