import Ember from 'ember';

export default Ember.ArrayController.extend({
    init: function() {
        this._super();
        //debugger;
        this.set('model', this.store.find('player'));
    }
});
