import React, { FC } from "react";
import { Place } from "../pages/UserPlacesPage";
import PlaceItem from "./PlaceItem";
import styles from "./PlacesList.module.css";

interface PlacesListProps {
    items: Place[];
}

const PlacesList: FC<PlacesListProps> = ({ items }) => {
    const itemsDisplay = (
        <ul>
            {items.map((place) => (
                <PlaceItem key={place.id} place={place} />
            ))}
        </ul>
    );
    return <div className="center">{itemsDisplay}</div>;
};

export default PlacesList;
