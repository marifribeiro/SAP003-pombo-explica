const platform = new H.service.Platform({'apikey': 'tZhODf6mVOg1j5L7qpwf6FUaVjw2JTGUylNC2EtXc78'});
const defaultLayers = platform.createDefaultLayers();
const map = new H.Map(
    document.getElementById('map'),
    defaultLayers.vector.normal.map,
        {
            zoom: 12,
            center: { lat: -23.55, lng: -46.65 }
        }
);
const ui = H.ui.UI.createDefault(map, defaultLayers, 'pt-BR'); 

const setNewCenter = (lat, long) => {
    position = {
        lat: lat,
        lng: long
        };
    map.setCenter(position);
    return position;
}

const callback = (position) => {
    setNewCenter(position.coords.latitude, position.coords.longitude)
}
const userLocation = () => {
    navigator.geolocation.getCurrentPosition(callback)
}
  
window.onload = function () {
    userLocation();
}

// firebase

const dbCollection = firebase.firestore().collection("monumentos")
dbCollection.get()
    .then((snap) => snap.forEach((monument) => {
        const local = { lat: monument.data().local[0], lng: monument.data().local[1] } 
        const marker = new H.map.Marker(local);
        const name = monument.data().nome;
        const address = monument.data().endereço;
                
        map.addObject(marker);
        map.addEventListener('tap', function (evt) {
            const coords = evt.target.getGeometry()
            if (coords.lat == local.lat && coords.lng == local.lng) {
                const bubble =  new H.ui.InfoBubble(local, { content: window.bubble.Bubble({
                    name, 
                    address, 
                })});
            ui.addBubble(bubble); 
            };
        }, false);
    }));
    

window.index = {
    setNewCenter
}