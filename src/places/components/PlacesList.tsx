import React, { FC } from "react";
import Button from "../../shared/components/UIElements/Button/Button";
import Card from "../../shared/components/UIElements/Card";
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

    if (items.length === 0) {
        return (
            <div>
                <Card>
                    <h2>No Places found. Maybe create one?</h2>
                    <Button to="/places/new">Share Place</Button>
                </Card>
            </div>
        );
    }

    return <div className="center">{itemsDisplay}</div>;
};

export default PlacesList;
