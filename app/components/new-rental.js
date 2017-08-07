import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

//The saveRental1 action collects all of the data that was entered in the input fields and sets them as values in a hash of keys with the same names. So, this.get('owner') collects the value entered in the owner input field and assigns it to the variable key owner. After each field's value is collected, the form is hidden again by setting the addNewRental property to false.

//Note: When a field is not populated, its value will be undefined. Undefined is not a valid JSON type. Undefined values will prevent the record from being written to Firebase and cause an error. For fields that may be undefined, add a conditional that sets them to "" or null. Example: owner: this.get('owner') ? this.get('owner') : ""

//Finally, the component emits the action saveRental2 sending with it the params hash that we just made. Remember that the component received saveRental2  from the index template (and this was set to "saveRental3" which we will name the route handler's action for saving.)
    saveRental1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('addNewRental', false);
      this.sendAction('saveRental2', params);
    }
  }
});
