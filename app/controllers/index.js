import Ember from 'ember';

export default Ember.Controller.extend({
    name: null,
    team: null,

    actions: {
        error: function() {
//            var newPost = this.store.createRecord('post', {
//                title: 'EmberFire is flaming hot!',
//                body: 'You can store and sync data in realtime without a backend.'
//            });
//            newPost.save();

            console.log("test");
            playError();
        },

        success: function() {
            playSuccess();
        },

        join: function() {
            console.log("submitting", this.get('name'), this.get('team'));

            var player = this.store.createRecord('player', {
                name: this.get('name'),
                team: this.get('team'),
                right: 0,
                answered: 0,
                percentMastery: 0
            });
            player.save();

            this.transitionTo('game').then(function(newRoute) {
                newRoute.controllerFor('game').set('player', player);
            });
        }
    }
});
