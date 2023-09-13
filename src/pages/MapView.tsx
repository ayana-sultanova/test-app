import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';

// @ts-ignore
const MapView = ({ route }) => {
    return (
        <MapContainer
            style={{ height: '100%', width: '100%' }}
            center={[0, 0]}
            zoom={10}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {route && (
                <>
                    <Polyline
                        positions={route.points}
                        pathOptions={{ color: 'blue' }}
                    />
                    {route.points.map((point: any, index: React.Key | null | undefined) => (
                        <Marker position={point} key={index} />
                    ))}
                </>
            )}
        </MapContainer>
    );
};

export default MapView;