// A Model is a data container.

var singleGlass = Backbone.Model.extend({

  defaults: {
    img: "images/placeholder.jpg"
  },
//default runs anytime a model instance is created.
// Intialize function is optional.
  initialize: function () {
    console.log("A model instance named " + this.get("name") + " has been created and its color is " + this.get("color"));

    this.on('change', function() {
      console.log("Something in my model has changed")
    });
    this.on('change:color', function() {
      console.log("The color for the " + this.get("name") + " has changed to " + this.get("color"));
    });
  }
});

// Watching for changes:
  // initialize() -  watches for changes (optional function)
  // get() - find a specific model property
  // set() - change or add new properties to models
  // on() - triggers the changes