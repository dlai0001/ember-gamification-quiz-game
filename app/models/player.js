import DS from 'ember-data';

export default
DS.Model.extend({
    name: DS.attr('string'),
    team: DS.attr('string'),
    right: DS.attr('number'),
    answered: DS.attr('number'),
    percentMastery: DS.attr('number'),

    masteryAsPercent: function() {
        return this.get('percentMastery') * 100;
    }.property('percentMastery')
});
