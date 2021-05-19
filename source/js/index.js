let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(59.9388121512484, 30.323040372688908),
        zoom: 15,
    });
    const icon = "../img/map-pin.png";
    const position = new google.maps.LatLng(59.9388121512484, 30.323040372688908)

    const marker = new google.maps.Marker({
        position: position,
        icon: icon,
        map: map,
    });
}