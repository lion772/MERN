import React, { FC } from "react";
import { Place } from "../pages/UserPlacesPage";
import styles from "./PlacesList.module.css";

interface PlacesListProps {
    userId: string;
    place: Place;
}

const PlacesList: FC<PlacesListProps> = ({ userId, place }) => {
    return (
        <div className={styles.PlacesList}>
            <div>
                <h1>{place.title}</h1>
                <h2>{place.creator}</h2>
                <p>{place.description}</p>
                <p>
                    Lat: {place.location.lat} LONG: {place.location.lng}
                </p>
                <img src={place.imageUrl} alt={place.creator} />
            </div>
        </div>
    );
};

export default PlacesList;
