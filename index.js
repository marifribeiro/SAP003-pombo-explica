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
    zoom: 12,
    center: { lat: -23.54891, lng: -46.63303 }
});

