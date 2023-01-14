import React, { useEffect, useRef } from "react";

import "./Map.css";

const Map = (props) => {
    let reloadCounter = 0;
    const mapRef = useRef();

    const { center, zoom } = props;
    console.log(center, zoom);

    useEffect(() => {
        console.log(reloadCounter);
        if (reloadCounter === 1) {
            new window.ol.Map({
                target: mapRef.current.id,
                layers: [
                    new window.ol.layer.Tile({
                        source: new window.ol.source.OSM(),
                    }),
                ],
                view: new window.ol.View({
                    center: window.ol.proj.fromLonLat([center.lng, center.lat]),
                    zoom: zoom,
                }),
            });
        }
        reloadCounter !== 1 && reloadCounter++;
    }, [center, reloadCounter, zoom]);

    return (
        <div
            ref={mapRef}
            className={`map ${props.className}`}
            style={props.style}
            id="map"
        ></div>
    );
};

export default Map;

/* const mapRef = useRef<HTMLDivElement | null>(null);

const { center, zoom } = props;

const initMap = useCallback(() => {
    let map: google.maps.Map;

    map = new window.google.maps.Map(mapRef.current as HTMLElement, {
        center: center,
        zoom: zoom,
    });
    new window.google.maps.Marker({ position: center, map: map });
}, [center, zoom]);

useEffect(() => {
    initMap();
}, [initMap]);

return (
    <div
        ref={mapRef}
        className={`${styles.Map} ${props.className}`}
        style={props.style}
    ></div>
); */
