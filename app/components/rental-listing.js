import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    john() {
      this.toggleProperty('isWide');
      console.log(this.isWide);
    }
  }
});
