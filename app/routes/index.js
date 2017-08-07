import Ember from 'ember';

export default Ember.Route.extend({
//we specify this.store to refer to the Firebase data store we've set up for our application. Then the findAll method with the argument rental instructs Ember Data to find all records of the type rental in the store, and return them to our application.
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
