import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "./index.css";

function App() {
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    // Cargar el archivo GeoJSON
    fetch("/mapes/map.geojson")
      .then((response) => response.json())
      .then((data) => {
        setGeoJsonData(data);
      })
      .catch((error) => console.error("Error cargando el GeoJSON:", error));
  }, []);

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

  const geoJsonStyle = {
    color: "red",
    weight: 3,
    opacity: 0.7,
  };

  const onEachFeature = (features, layer) => {
    if (features.properties && features.properties.name) {
      const popupContent = `
      <div>
      <h3>${features.properties.name}</h3>
      <p>Distància: ${features.properties.distance}</p>
      <p>Desnivell: ${features.properties.elevation}</p>
      </div>
      `;
      layer.bindPopup(popupContent);
    }
  };

  return (
    <>
      <MapContainer center={[39.764552, 2.727484]} zoom={14}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/pableroni/clzvecqzh000301pe8afe73ht/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGFibGVyb25pIiwiYSI6ImNsenZlYWJ4dDA3Y3kya3NkejU0M2ZxcmsifQ._wYVoRilNCKpdBqp0VUv_w`}
          attribution='Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        {markers.map((marker) => (
          <Marker position={marker.geocode} key={marker.popup}>
            <Popup className="custom-popup">{marker.popup}</Popup>
          </Marker>
        ))}
        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            style={geoJsonStyle}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>
    </>
  );
}

export default App;
