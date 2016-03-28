import Ember from 'ember';

export default Ember.Component.extend({
  columns: [
    {
      "title": "Source",
      "propertyName": "attribution"
    },
    {
      "title": "Dataset Name",
      "template": "display-link"
    },
    {
      "title": "Count",
      "propertyName": "num_shapes"
    },
    {
      "title": "Download",
      "template": "shape-download-link"
    }
  ],
  customMessages: {
    "searchLabel": "Filter on text:",
    "tableSummary": "Showing %@ - %@ of %@",
    "noDataToShow": "Could not find any data within your filters"
  },
  pageSizeValues: Ember.A([5, 10, 25, 50]),
  customClasses: {"globalFilterWrapper": "pull-left bottom-breathe"}
});
