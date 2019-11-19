// exibe o centro do mapa no local da busca
const onResult = function(result) {
    const locations = result.Response.View[0].Result;   
    window.index.setNewCenter(
        locations[0].Location.DisplayPosition.Latitude, 
        locations[0].Location.DisplayPosition.Longitude
    )
};

const mapEvents = new H.mapevents.MapEvents(map);
const behavior = new H.mapevents.Behavior(mapEvents);

const search = (event) => {
    event.preventDefault();
    const endereco = document.getElementById('endereco').value
    geocodingParams = {
        searchText: `${endereco}, São Paulo, Brazil`
    };
    map.setZoom(17);
    geocoder.geocode(geocodingParams, onResult)
}

const form = document.querySelector('.lupa');
form.addEventListener('click', search);

const geocoder = platform.getGeocodingService();