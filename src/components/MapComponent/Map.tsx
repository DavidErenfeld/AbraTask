import { MapContainer, TileLayer } from "react-leaflet";

import { usePlaceStore } from "../../store/PlaseStor";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  const { places } = usePlaceStore();
  return (
    <section>
      <MapContainer
        className="map-container"
        style={{
          height: "100vh",
          width: "100%",
        }}
        center={[31.432026740690574, 120.8439179532812]}
        zoom={8}
      >
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <div className="points">
          {places.map((place) => (
            <div key={place.id} className="point"></div>
          ))}
        </div>
      </MapContainer>
    </section>
  );
};

export default Map;
