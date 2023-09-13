import React, {useEffect, useRef, useState} from "react";
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/rootReducer";
import LoadingSpinner from "../../common/LoadingSpinner";
import {defaultPosition} from "../../utils/constants";

const L = require("leaflet");
let DefaultIcon = L.icon({
    iconUrl: require("../images/temp.png"),
    iconSize: [30, 30]
});

export default function Map() {
    const destinations = useSelector((state: RootState) => state.routeReducer.routeData)
    const loading = useSelector((state: RootState) => state.routeReducer.loading)
    const [loc, setLoc] = useState<[number, number]>([
        defaultPosition.lat,
        defaultPosition.lng
    ]);
    const [routeCoordinates, setRouteCoordinates] = useState()

    const markerRef = useRef(null);
    useEffect(() => {
    const routeCoordinates = destinations?.map((destination: { location: any; }) => destination.location);
    setRouteCoordinates(routeCoordinates)
        if (routeCoordinates && routeCoordinates.length > 0) {
            const mapBounds = L.latLngBounds(routeCoordinates);
            const mapCenter = mapBounds.getCenter();
            setLoc([mapCenter.lat, mapCenter.lng]);
        }
    }, [destinations]);

    if (loading) {
      return <div className='wrapper'> <LoadingSpinner /> </div>
    }

    return (
    <MapContainer className="map" center={loc} zoom={defaultPosition.zoom}>
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={loc}
                draggable={true}
                ref={markerRef}
                icon={DefaultIcon}
            >
                <Popup>
                    Location
                </Popup>
            </Marker>
            {routeCoordinates && <Polyline pathOptions={{color: "blue"}} positions={routeCoordinates}/>}
        </>
    </MapContainer>
    );
}