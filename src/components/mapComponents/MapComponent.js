// src/MapComponent.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl,LayerGroup,Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Leaflet's default icon issue fix (optional)
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import './MapComponent.css'; //import custom css for styling
import './StaticLayerControl.css'; //import custom css to make layer control static



let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41], // [left/right, top/bottom]
    popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;
const {BaseLayer, Overlay}= LayersControl;

const MapComponent = () => {
    const position = [52.520008, 13.404954]; // [51.505, -0.09] Example coordinates (London)#52.520008, and the longitude is 13.404954.
    const circlePosition = [52.520010, 13.40496]; // Position for overlay example

    return (
        <div className='map-container'>
        {/* <img src={require('./assets/logo-white.png')} alt="Logo" className='logo'/> */}

  <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <LayersControl position="topleft">
                <BaseLayer checked name="OpenStreetMap">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                </BaseLayer>
                <BaseLayer name="Google Maps Satellite">
                    <TileLayer
                        url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"//" https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                        attribution='&copy; <a href="https://qms.nextgis.com/geoservices/678/">TMS</a> contributors' 
                    />
                </BaseLayer>
                {/* Overlay Layers */}
                <Overlay checked name="Marker">
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Overlay>
                <Overlay name="Circle">
                    <LayerGroup>
                        <Circle
                            center={circlePosition}
                            pathOptions={{ color: 'blue' }}
                            radius={200}
                        />
                    </LayerGroup>
                </Overlay>                
            </LayersControl>
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

   
    
        </div>
    );
}

export default MapComponent;

