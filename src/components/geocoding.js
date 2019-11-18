
const platform = new H.service.Platform({
    'apikey': 'WNKocGDKwpdVAxFvJdlgd-LNIPMqoPR4xZQ9RpRe5LA'
});

const defaultLayers = platform.createDefaultLayers();

const targetElement = document.getElementById('mapContainer');

const map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 10,
        center: { lat: -23.5489, lng: -46.6388 }
    });

const onResult = function (result) {
    let locations = result.Response.View[0].Result,
        position,
        marker;

    for (i = 0; i < locations.length; i++) {
        position = {
            lat: locations[i].Location.DisplayPosition.Latitude,
            lng: locations[i].Location.DisplayPosition.Longitude
        };
        map.setCenter(position)
        map.setZoom(15)
        marker = new H.map.Marker(position);
        map.addObject(marker);
    }
};

const onSuccess = function (result) {
    let location = result.Response.View[0].Result[0];

    // Create an InfoBubble at the returned location with
    // the address as its contents:
    ui.addBubble(new H.ui.InfoBubble({
        lat: location.Location.DisplayPosition.Latitude,
        lng: location.Location.DisplayPosition.Longitude
    }, { content: location.Location.Address.Label }));
};


const geocoder = platform.getGeocodingService();

