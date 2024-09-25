mapboxgl.accessToken=
"pk.eyJ1Ijoib2xvdmUwMyIsImEiOiJjbTFpNWF4dWowMDFlMmxuM2g5cWV2YmZhIn0.2pUVa7c8V-OXMP8oS83F0A"

// CREATE A NEW OBJECT CALLED MAP
const map= new mapboxgl.Map({
container: "map",
style: "mapbox://styles/olove03/cm1i5ifzv01jp01pc1aun43ed",
center: [-73.9442, 40.6782],
zoom: 11,
projection: "globe",
});
