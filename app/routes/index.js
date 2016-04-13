import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('discover');
  },
  query: Ember.inject.service('query'),
  model() {
    return Ember.RSVP.hash({
      pointDatasets: this.get('query').allEventMetadata(),
      shapeDatasets: this.get('query').allShapeMetadata()
    });
  }
});
