// View for all the Glass:


//create a new view
var allGlassView = Backbone.View.extend({
// set collection tag name to be an html5 section tag
  tagName: "section",
// telling render to look for this.collection, which is a reference to whatever collection I attach to it
// Each is looking at items in collection and performing task inside parens
//addGlass is custom function that is created below
//second parameter: this keyword to give context for all this code, which you have to do for JS, otherwise addGlass method won't work
  render: function() {
 	  this.collection.each(this.addGlass, this);
 		return this;
  },
//model & collection views need to communicate with each other
// new instance of model view call glassView
// $el = section tag
 addGlass: function(glass) {
 		var glassView = new singleGlassView ({ model: glass });
 		this.$el.append(glassView.render().el);
 }
});
//still need to tell it what model to look at