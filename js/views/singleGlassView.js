// Views:
// - contain the rules for moving data into HTML
// - views create templates, thanks to Underscore
// - can use other templates in Backbone
// - use render() to build the HTML structure based on logic given to it by the view

var singleGlassView = Backbone.View.extend({
  // below 2 are optional properties
  tagName: "article",   // (div tag name) - where single model data should be placed; default is "div"
  className: "glassListItem", //defines any page classes that article should have in case of wanting to apply CSS styling

//template = underscore method which will build out template by passing it parameters. At this point, doesn't know where model data is. Need render function.  (Template is from index.html)
  template: _.template( $("#glassElement").html() ),
// Looks at all logic defined up to this point and built out the element. Telling it to do this with the glassTemplate variable defined below. Template defined above, unique to view. Passing parameter to template: a reference to model available to view at some point & converting model data to JSON-like JS object with to JSON method. Looking for model data, but doesn't know yet which data to look for.
// $el contains properties defined above. Referencing it with JQUery, so can apply JQUery methods to it. html method populating $el with parameter of glassTemplate. None of data available on webpage yet. Need collection view.
  render: function() {
    var glassTemplate = this.template(this.model.toJSON());
    this.$el.html(glassTemplate);
    return this;
  },
// object called 'events' with key value pairs; value represents custom method
// Events attribute fulfills the role of the Controller, defining how events occurring w/in the View's DOM element are to be routed to event-handling methods defined in the View
  events: {
  	'mouseover': 'addBgColor',
    // 'mouseover': 'imageRollOver',
  	'mouseout': 'removeBgColor'
  },

  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  // imageRollOver: function() {
  //   $('img').attr('src', 'img2');
  // },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});