

var Router = Backbone.Router.extend({

routes :{
// 'route' : 'mappedFunction'
	"": "showHome",     // attaches route to home page
  "glass/:id" : "getExamples"
},


//all methods that get invoked when one of glass images gets clicked on

// routes configured but not instantiated yet: go to glassApp.js

showHome: function() {},

getExamples: function(id) {
  console.log("Supposed to see glass in 'category' requested.");
  this.navigate("glass/" + id, {trigger: true});
  }
});

  //updates the fragment, and also triggers route
  //creates a bookmarkable URL when application transitions to a specific state


