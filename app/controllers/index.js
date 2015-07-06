import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        test: function() {
            var newPost = this.store.createRecord('post', {
                title: 'EmberFire is flaming hot!',
                body: 'You can store and sync data in realtime without a backend.'
            });
            newPost.save();
        }
    }
});
