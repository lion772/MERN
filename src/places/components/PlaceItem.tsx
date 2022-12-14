import React, { FC, useState } from "react";
import Button from "../../shared/components/UIElements/Button/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal/Modal";
import { Place } from "../pages/UserPlacesPage";
import styles from "./PlaceItem.module.css";
import GOOGLE_APP_SECRET_ID from "../../secrets.json";

interface PlaceItemProps {
    place: Place;
}

const PlaceItem: FC<PlaceItemProps> = ({ place }) => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    return (
        <>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={place.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                {/* <div className="map-container">
                    <Map center={place.location} zoom={16} />
                </div> */}
                <div className="map-container">
                    <iframe
                        title="map"
                        width="100%"
                        height="100%"
                        src={
                            "https://maps.google.com/maps?q=" +
                            place.location.lat.toString() +
                            "," +
                            place.location.lng.toString() +
                            "&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        }
                    />
                    <script
                        type="text/javascript"
                        src={`https://embedmaps.com/google-maps-authorization/script.js?id=${GOOGLE_APP_SECRET_ID}`}
                    ></script>
                </div>
            </Modal>
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
                            <Button inverse onClick={openMapHandler}>
                                View on map
                            </Button>
                            <Button to={`/places/${place.id}`}>Edit</Button>
                            <Button danger>Delete</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default PlaceItem;
