import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function() {
        this.render();

        this.render('leaderboard', {   // the template to render
            into: 'game',                // the template to render into
            outlet: 'leaderboard',              // the name of the outlet in that template
            controller: 'leaderboard'        // the controller to use for the template
        });
//        this.render('comments', {
//            into: 'favoritePost',
//            outlet: 'comment',
//            controller: 'blogPost'
//        });
    }
});
