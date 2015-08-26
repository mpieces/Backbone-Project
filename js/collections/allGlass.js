// Collection = a group of model instances:
// First have to let it know what model it's based on.
// A group (array) of Glass models

var glassCollection = Backbone.Collection.extend({

  // What type of models are in this collection
  model: singleGlass

});

// then instantiate them in glassApp.js as an array