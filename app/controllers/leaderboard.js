import Ember from 'ember';

export default Ember.ArrayController.extend({
    init: function() {
        this._super();
        //debugger;
        this.set('model', this.store.find('player'));
    },

    sortedList: function() {
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: ['right'],
            sortAscending: false,
            content: this.get('model')
        });
    }.property('model')
});
