// - Crea un mapa en HTML

// - Pon chinchetas en tus 3 lugares favoritos del planeta tierra

// Initialize and add the map
function initMap() {
  
  const roma = { lat: 41.892, lng: 12.478 };
  const Frekhaug = { lat: 60.513, lng: 5.2419 };
  const atenas = { lat: 38.004, lng: 23.735 };

  // The map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: roma,
  });
  // The marker
  const one = new google.maps.Marker(
    { position: roma, map, title: "Roma" }
  )
  const two = new google.maps.Marker(
    { position: atenas, map, title: "Atenas" }
  )
  const tree = new google.maps.Marker(
    { position: Frekhaug, map, title: "Frekhaug" }
  )
}

window.initMap = initMap;
