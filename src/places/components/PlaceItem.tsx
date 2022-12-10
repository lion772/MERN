import React, { FC } from "react";
import { Place } from "../pages/UserPlacesPage";
import styles from "./PlaceItem.module.css";

interface PlaceItemProps {
    place: Place;
}

const PlaceItem: FC<PlaceItemProps> = ({ place }) => {
    return (
        <div className="center">
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

export default PlaceItem;
