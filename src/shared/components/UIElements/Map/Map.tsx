import React, {
    CSSProperties,
    FC,
    useCallback,
    useEffect,
    useRef,
} from "react";
import styles from "./Map.module.css";

interface MapProps {
    className?: string | undefined;
    center: {
        lat: number;
        lng: number;
    };
    zoom: number;
    style?: CSSProperties | undefined;
}

const Map: FC<MapProps> = (props) => {
    const mapRef = useRef<HTMLDivElement | null>(null);

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
    );
};

export default Map;
