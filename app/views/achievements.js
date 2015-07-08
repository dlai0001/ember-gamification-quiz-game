import Ember from 'ember';

export default Ember.View.extend({
    didInsertElement: function() {
        this.$('[data-toggle="tooltip"]').tooltip();
    },

    //observe controller properties
    babysteps: function() {
        try {
            var value = this.get("controller.babysteps");
            if (value) {
                this.$(".BabyStepsIcon").addClass("visible");
            } else {
                this.$(".BabyStepsIcon").removeClass("visible");
            }
        }catch(e) {}
    }.observes("controller.babysteps"),

    threeInARow: function() {
        try {
            var value = this.get("controller.threeInARow");
            if (value) {
                this.$(".bowling-turkey-hi").addClass("visible");
            } else {
                this.$(".bowling-turkey-hi").removeClass("visible");
            }
        }catch(e) {}
    }.observes("controller.threeInARow"),

    masteredFifty: function() {
        try {
            var value = this.get("controller.masteredFifty");
            if (value) {
                this.$(".s-50-percent").addClass("visible");
            } else {
                this.$(".s-50-percent").removeClass("visible");
            }
        }catch(e) {}
    }.observes("controller.masteredFifty"),

    masteredOneHundred: function() {
        try {
            var value = this.get("controller.masteredOneHundred");
            if (value) {
                this.$(".hundredpercent").addClass("visible");
            } else {
                this.$(".hundredpercent").removeClass("visible");
            }
        }catch(e) {}
    }.observes("controller.masteredOneHundred"),

    oneHunderedPercentAccurate: function() {
        try {
            var value = this.get("controller.oneHunderedPercentAccurate");
            if (value) {
                this.$(".target-icon").addClass("visible");
            } else {
                this.$(".target-icon").removeClass("visible");
            }
        }catch(e) {}
    }.observes("controller.oneHunderedPercentAccurate")
});
