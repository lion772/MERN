import React, { FC } from "react";
import { Place } from "../pages/UserPlacesPage";
import PlaceItem from "./PlaceItem";
import styles from "./PlacesList.module.css";

interface PlacesListProps {
    items: Place[];
}

const PlacesList: FC<PlacesListProps> = ({ items }) => {
    const itemsDisplay = (
        <div className={styles["place-list"]}>
            {items.map((place: Place) => (
                <PlaceItem key={place.id} place={place} />
            ))}
        </div>
    );

    return <div className="center">{itemsDisplay}</div>;
};

export default PlacesList;
