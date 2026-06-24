(function () {
  var mapElement = document.getElementById("office-map");

  if (!mapElement || typeof L === "undefined") {
    return;
  }

  var office = [35.64944872393974, 140.04844112274003];
  var map = L.map(mapElement).setView(office, 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker(office).addTo(map).bindPopup("IDE-JETRO");
})();
