const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const input = document.querySelector(".busca").value + ", Brasil"
    geocodingParams = {
        searchText: input
    };
    geocoder.geocode(geocodingParams, onResult);

    const input2 = document.querySelector(".busca").value + ", Brasil"
    reverseGeocodingParameters = {
        maxresults : input2 
    };
    geocoder.reverseGeocode(reverseGeocodingParameters, onSuccess);

})