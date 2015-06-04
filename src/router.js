// Create a new instance of the backbone router object
var router = new Backbone.Router();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

function show (titleStr){
		$('h1').html(titleStr);
	}
// the default route, which runs when the url is blank
router.route('', function () {
  show('<h1>Home</h1>');
});

router.route('home', function () {
  show('Home'); 
});

// Add the mac route which runs when the URL is #mac
router.route('mac', function () {
  show('Mac');
});

// Add the data route which runs when the URL is #data
router.route('data', function () {
  show('Data');
});

// Add the weather route which runs when the URL is #weather
router.route('weather', function () {
  show('Weather');
    $('.active-title').html("Current Weather");
});

// Kick off our initial route
Backbone.history.loadUrl();