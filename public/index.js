// Instantiate a map and platform object:
let platform = new H.service.Platform({'apikey': 'tZhODf6mVOg1j5L7qpwf6FUaVjw2JTGUylNC2EtXc78'});

// Obtain the default map types from the platform object:
let defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
let map = new H.Map(
    document.getElementById('map'),
    defaultLayers.vector.normal.map,
        {
            zoom: 12,
            center: { lat: -23.55, lng: -46.65 }
        }
);

let ui = H.ui.UI.createDefault(map, defaultLayers, 'pt-BR'); // zoom/ escala/ tipo


// GEOCODING

// Create the parameters for the geocoding request:
let geocodingParams = {
    searchText: 'são paulo'
}; 
  
// Define a callback function to process the geocoding response:
let onResult = function(result) {
    let locations = result.Response.View[0].Result,
    position,
    marker;

    // Add a marker for each location found
    for (i = 0;  i < locations.length; i++) {
    position = {
      lat: locations[i].Location.DisplayPosition.Latitude,
      lng: locations[i].Location.DisplayPosition.Longitude
    };
    map.setCenter(position);
    marker = new H.map.Marker(position);
    map.addObject(marker);
    }
};
  
// Get an instance of the geocoding service:
let geocoder = platform.getGeocodingService();
  
// the callback and an error callback function 
geocoder.geocode(geocodingParams, onResult, function(e) {
    alert(e);
});
  

// EVENTO

let mapEvents = new H.mapevents.MapEvents(map);

// Add event listeners:
map.addEventListener('tap', function(evt) {
    console.log(evt.type, evt.currentPointer.type); 
});
  
// Instantiate the default behavior, providing the mapEvents object: 
let behavior = new H.mapevents.Behavior(mapEvents);


//   MARCADOR E BOLHA

// // Create a marker icon from an image URL:
// let icon = new H.map.Icon('graphics/markerHouse.png');

// // Create a marker using the previously instantiated icon:
// let marker = new H.map.Marker({ lat: 52.5, lng: 13.4 }, { icon: icon });

// // Add the marker to the map:
// map.addObject(marker);


//   let bubble = new H.ui.InfoBubble({ position } , {
//     content: '<b>Hello World!</b>'
//    });
    
// // Add info bubble to the UI:
// ui.addBubble(bubble);


////////////////////////////////////////////

const search = (event) => {
    event.preventDefault();
    const endereco = document.getElementById('endereco').value
    geocodingParams = {
        searchText: endereco
    };
    map.setZoom(17);
    geocoder.geocode(geocodingParams, onResult)
}

const form = document.getElementById('form');
form.addEventListener('submit', search);



const db = firebase.firestore()
db.collection("monumentos").doc("anhanguera").get().then((data) => {
    console.log(data.data().ano)
})
