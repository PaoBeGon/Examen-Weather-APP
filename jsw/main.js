var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/fa5715ba5adff2ac/conditions/q/CA/Los_angeles.json", false);
weather.send(null);

var r = JSON.parse(weather.response);

var dis = "Lugar: " + r.current_observation.display_location.full + "  <p>";
var temp = r.current_observation.temperature_string+ "  <p>";

function getWeather(id,res) {
  document.getElementById(id).innerHTML=res;
}
getWeather("weather",dis);
getWeather("temp",temp);
///

var weather2 = new XMLHttpRequest();
weather2.open("GET", "http://api.wunderground.com/api/bd0893ab7e76c5ac/conditions/q/CA/San_Francisco.json", false);
weather2.send(null);

var r = JSON.parse(weather.response);

var dis = "Lugar: " + r.current_observation.display_location.full + "  <p>";
var temp = r.current_observation.temperature_string+ "  <p>";

function getWeather(id,res) {
  document.getElementById(id).innerHTML=res;
}
getWeather("weather2",dis);
getWeather("temp2",temp);