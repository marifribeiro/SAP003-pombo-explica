const form = document.querySelector('#form');
const address = document.querySelector('#address');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var geocodingParams = { searchText: `${address.value}, São Paulo, Brazil` };
    var geocoder = platform.getGeocodingService();
    geocoder.geocode(geocodingParams, onResult);
})

// Define a callback function to process the geocoding response:
var onResult = function(result) {
    var locations = result.Response.View[0].Result,
      position,
      marker;
    // Add a marker for each location found
    for (i = 0;  i < locations.length; i++) {
    position = {
      lat: locations[i].Location.DisplayPosition.Latitude,
      lng: locations[i].Location.DisplayPosition.Longitude
    };
    map.setCenter(position)
    map.setZoom(16)
    marker = new H.map.Marker(position);
    map.addObject(marker);
    }
  };