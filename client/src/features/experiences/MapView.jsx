import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const position = [51.505, -0.09];
export const MapView = () => {
  return (
    <div className="w-full h-[300px] mb-[200px]">
      <MapContainer
        style={{
          height: "100%",
          width: "100%",
        }}
        center={position}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
