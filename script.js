const scriptSrc = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.GOOGLE_MAPS_API_KEY + '&callback=initMap';
console.log("aaaaa", scriptSrc)
// Create a new script element with the correct src
const script = document.createElement('script');
script.src = scriptSrc;
script.async = true;
script.defer = true;

// Append the script to the document head
document.head.appendChild(script);

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: { lat: 33.999598, lng: -118.155891 },
    });
  
    // Add markers for each restaurant
    const markers = 
    [
    {"lat": 34.007601, "lng": -118.241754, "label": "A", "id":"foodbank"},
    {"lat": 34.145373, "lng": -118.031300, "label": "B", "id":"innout"},
    {"lat": 33.85800, "lng": -118.303202, "label": "C", "id":"greatsteak"},
    {"lat": 34.097735, "lng":-118.108924, "label": "D", "id":"ftb"},
    {"lat": 34.102109, "lng":-118.112695, "label": "E", "id":"yama"},
    {"lat": 34.062965, "lng":-118.109082, "label": "F1", "id":"monterey"},
    {"lat": 34.079809, "lng":-118.073484, "label": "F2", "id":"sea"},
    {"lat": 34.092284, "lng":-118.132169, "label": "F3", "id":"lunasia"},
    {"lat": 34.078766, "lng":-118.103205, "label": "F4", "id":"shanghai"},
    {"lat": 34.080508, "lng":-118.093262, "label": "G1", "id":"rirang"},
    {"lat": 34.104011, "lng":-118.087645, "label": "G2", "id":"yong"},
    {"lat": 34.053094, "lng":-118.292539, "label": "G3", "id":"beverly"},
    {"lat": 34.062927, "lng":-118.063511, "label": "H1", "id":"filet"},
    {"lat": 34.094541, "lng":-118.128706, "label": "H2", "id":"crawfish"},
    {"lat": 34.102854, "lng":-118.111756, "label": "H3", "id":"golden"},
    {"lat": 34.108820, "lng":-118.017967, "label": "H4", "id":"lao"},
    {"lat": 34.040157, "lng":-118.442470, "label": "I", "id":"tsujita"},
    {"lat": 34.041428, "lng":-118.232907, "label": "J", "id":"bavel"},
    {"lat": 34.127241, "lng":-118.054280, "label": "K", "id":"din"},
    {"lat": 34.108020, "lng":-117.826522, "label": "L1", "id":"show"},
    {"lat": 34.097831, "lng":-118.073811, "label": "L2", "id":"ook"},
    {"lat": 34.068802, "lng":-118.305196, "label": "L3", "id":"yerim"},
    {"lat": 34.063841, "lng":-118.306149, "label": "L4", "id":"hjc"},
    {"lat": 34.062747, "lng":-118.134556, "label": "L5", "id":"shin"},
    {"lat": 34.124194, "lng":-118.058224, "label": "L6", "id":"mokkoji"},
    {"lat": 34.146474, "lng":-118.073948, "label": "L7", "id":"mongolian"},
    {"lat": 34.128994, "lng":-117.849770, "label": "M", "id":"donut"},
    {"lat": 34.053661, "lng":-118.035842, "label": "N", "id":"candy"},
    {"lat": 33.992315, "lng":-118.422230, "label": "O", "id":"angel"},
    {"lat": 34.145962, "lng":-118.152370, "label": "P", "id":"21"},
    {"lat": 34.075812, "lng":-118.323400, "label": "Q", "id":"salt"},
    {"lat": 34.073773, "lng":-118.323947, "label": "R", "id":"jenis"},
    {"lat": 33.879658, "lng":-118.282933, "label": "S", "id":"fresa"}
    ];
  
    markers.forEach((marker) => {
      const position = { lat: marker.lat, lng: marker.lng };
      const markerObj = new google.maps.Marker({
        position,
        label: marker.label,
        map,
      });
  
      // Add click event listener for each marker
      markerObj.addListener('click', () => {
        // Scroll to the corresponding restaurant section
        const section = document.getElementById(marker.id);
        section.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }