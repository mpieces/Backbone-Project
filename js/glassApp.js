var miniEpergne = new singleGlass({
  name: "Epergne",
  maker: "Fenton",
  pattern: "Hobnail",
  color: "Plum opalescent",
  img: "images/miniEpergne.jpg",
  link: "glass/1"
});

var vanitySet = new singleGlass({
  name: "Vanity Set",
  maker: "Fenton",
  pattern: "Hobnail",
  color: "Blue opalescent",
  img: "images/vanitySet.jpg",
  link: "glass/2"
});

var cakePlate = new singleGlass({
  name: "Cake Plate",
  maker: "Fenton",
  pattern: "Hobnail",
  color: "Blue opalescent",
  img: "images/cakePlate.jpg",
  link: "glass/3"
});

var punchBowl = new singleGlass({
  name: "Carnival Glass Punch Bowl",
  maker: "Fenton",
  pattern: "Orange Tree",
  color: "Blue",
  img: "images/punchBowl.jpg",
  link: "glass/4"
});

var peacockBowl = new singleGlass({
  name: "Carnival Glass Ruffled Bowl",
  maker: "Fenton",
  pattern: "Peacock Tail",
  color: "Green",
  img: "images/peacockBowl.jpg",
  link: "glass/5"
});

var twoTier = new singleGlass({
  name: "Two-Tiered Tidbit Server",
  maker: "Fenton",
  pattern: "Silver Crest",
  color: "White",
  img: "images/twoTier.jpg",
  link: "glass/6"
});

var berryBowl = new singleGlass({
  name: "Carnival Glass Ruffled Master Berry Bowl",
  maker: "Imperial",
  pattern: "Zippered Hearts",
  color: "Purple",
  img: "images/berryBowl.jpg",
  link: "glass/7"
});

var tumblers = new singleGlass({
  name: "Carnival Glass Tumblers",
  maker: "Imperial",
  pattern: "Crackle",
  color: "Marigold",
  img: "images/tumblers.jpg",
  link: "glass/8"
});

// Creates a new instance of glass collection and pass it an array
var glassGroup = new glassCollection([
  miniEpergne, vanitySet, cakePlate, punchBowl, peacockBowl, twoTier, berryBowl, tumblers
]);

// have to assign it an actual collection at end of code:
var glassGroupView = new allGlassView({ collection: glassGroup});

//jQuery targeting id allGlass. HTML will load what's in parens: View code cannot be invoked until render method is called, which triggers the addGlass method, and things start to get built out from there. .El is added to make sure model data gets loaded into the collection view's root element, which is a section tag.
$("#allGlass").html(glassGroupView.render().el);

// new instance of route
var glassRouter = new  Router();
// keep track of historical clicks; tells BB that it's ok to begin monitoring all hashchange events
Backbone.history.start();



// Display instances of model method in json format:

// console.log(miniEpergne.toJSON());
// console.log(vanitySet.toJSON());
// console.log(cakePlate.toJSON());

// console.log(glassGroup.toJSON());

//Change the color:
// cakePlate.set('color', 'green');

//Add new instance to collection:
// glassGroup.add(cakePlate);

//Remove instance from collection:
// glassGroup.remove(cakePlate);




