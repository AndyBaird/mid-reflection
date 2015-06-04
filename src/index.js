$(function(){
	$('.side-bar-btn').click(function showArrow (){
		$(this)
		.siblings(".arrow_box")
		.css({visibility: 'visible'})
	});

$('.btn-weather').click(getWeather(27701));

function getWeather(zipCode) {
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us')
    .done(function (data) {
    	$('.active-title').html("Current Weather");
    	$('.active-content').html(data.weather[0].description + ' in ' + data.name + ' at the moment');
  });
}



});




//function getWeather(){
//	var currentWeather = '';
//	 $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip=27701,us')
//	  .done(function (data) {
//	      var weatherDescription = data.weather[0].description;
//		  var weatherCityName = data.name;
//		  var currentWeather = weatherCityName + ', ' + weatherDescription; 
//		  console.log(currentWeather);
//		  return currentWeather; 	   
//	  });
//	
//
//}
