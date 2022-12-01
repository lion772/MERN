import React, { FC } from "react";
import styles from "./PlacesList.module.css";

interface PlacesListProps {
    userId: string;
}

const PlacesList: FC<PlacesListProps> = ({ userId }) => (
    <div className={styles.PlacesList}>PlacesList Component</div>
);

export default PlacesList;
