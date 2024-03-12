/* eslint-disable react/prop-types */
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useExperienceContext } from "../../context/ExperienceContext";
const position = [51.505, -0.09];
export const MapView = () => {
  const {
    coords: { lat, lng },
  } = useExperienceContext();

  return (
    <div className="w-full h-[300px] mb-[200px]">
      <MapContainer
        style={{
          height: "100%",
          width: "100%",
        }}
        center={position}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>London</Popup>
        </Marker>
        <MapCenter pos={[lat, lng]} />
      </MapContainer>
    </div>
  );
};

function MapCenter({ pos }) {
  const map = useMap();
  map.setView([pos[0], pos[1]]);
  return null;
}
