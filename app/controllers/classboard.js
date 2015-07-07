import Ember from 'ember';

export default Ember.ArrayController.extend({

    sortProperties: ['percentMastery'],
    sortAscending: false,

    classMastery: function() {
        var totalMastery = 0;
        var players = this.get("model");
        players.forEach( function(player) {
            totalMastery += player.get("percentMastery");
        });
        return totalMastery / players.get("length");
    }.property('@each.percentMastery'),

    classMasteryPercent: function() {
        return (this.get('classMastery')*100).toString() + "%";
    }.property('classMastery')
});
