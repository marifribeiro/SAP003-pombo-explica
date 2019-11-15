const platform = new H.service.Platform({
    'apikey': '5B10N4EM58FrVB02ghsufmER_fRgFHqVRHCD06K7bhQ'
  });

// Retrieve the target element for the map:
const targetElement = document.getElementById('mapContainer');

// Obtain the default map types from the platform object:
const defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
const map = new H.Map(
  targetElement,
  defaultLayers.vector.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
});

//GEOCODING

var geocodingParams = {
    searchText: 'Rua Paratiba, 701, São Paulo, Brazil'
  };

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

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
geocoder.geocode(geocodingParams, onResult, function(e) {
  alert(e);
});