import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.css";

function App() {
  const darkMap = "mapbox://styles/pableroni/clzvecqzh000301pe8afe73ht";
  const MapboxToken =
    "pk.eyJ1IjoicGFibGVyb25pIiwiYSI6ImNsenZlYWJ4dDA3Y3kya3NkejU0M2ZxcmsifQ._wYVoRilNCKpdBqp0VUv_w";

  const APImapBox =
    "https://api.mapbox.com/v4/pableroni/clzvecqzh000301pe8afe73ht/{x}/{y}{@2x}.{format}";

  const markers = [
    {
      geocode: [39.758808, 2.747396],
      popup: "Refugi Cornadors",
    },
    {
      geocode: [39.764552, 2.727484],
      popup: "Sa Grillona",
    },
    {
      geocode: [39.770013, 2.71552],
      popup: "Andreu Coll 10",
    },
  ];

  return (
    <>
      <MapContainer center={[39.6953, 3.0176]} zoom={10}>
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        {/* <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFibGVyb25pIiwiYSI6ImNsenZlYWJ4dDA3Y3kya3NkejU0M2ZxcmsifQ._wYVoRilNCKpdBqp0VUv_w"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/pableroni/clzvecqzh000301pe8afe73ht/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGFibGVyb25pIiwiYSI6ImNsenZlYWJ4dDA3Y3kya3NkejU0M2ZxcmsifQ._wYVoRilNCKpdBqp0VUv_w`}
          attribution='Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        {markers.map((marker) => (
          <Marker position={marker.geocode} key={marker.popup}>
            <Popup className="custom-popup">{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default App;
