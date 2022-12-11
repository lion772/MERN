import React, { FC } from "react";
import Button from "../../shared/components/UIElements/Button/Button";
import Card from "../../shared/components/UIElements/Card";
import { Place } from "../pages/UserPlacesPage";
import styles from "./PlaceItem.module.css";

interface PlaceItemProps {
    place: Place;
}

const PlaceItem: FC<PlaceItemProps> = ({ place }) => {
    return (
        <div className={`${styles["place-item"]}`}>
            <Card className={styles["place-item__content"]}>
                <div className={styles["place-item__image"]}>
                    <img src={place.imageUrl} alt={place.creator} />
                </div>
                <div className={styles["place-item__info"]}>
                    <h1>{place.title}</h1>
                    <h2>{place.creator}</h2>
                    <p>{place.description}</p>
                    <p>
                        Lat: {place.location.lat} LONG: {place.location.lng}
                    </p>
                    <div className={styles["place-item__actions"]}>
                        <Button>View on map</Button>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default PlaceItem;
