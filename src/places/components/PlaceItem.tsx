import React, { FC, useState } from "react";
import Button from "../../shared/components/UIElements/Button/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal/Modal";
import Map from "../../shared/components/UIElements/Map/Map";
import { Place } from "../pages/UserPlacesPage";
import styles from "./PlaceItem.module.css";

interface PlaceItemProps {
    place: Place;
}

const PlaceItem: FC<PlaceItemProps> = ({ place }) => {
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    const showDeleteWarningHandler = () => setShowConfirmModal(true);
    const cancelDeleteHandler = () => setShowConfirmModal(false);

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        console.log("Deleting place ...");
    };
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
                <div className={styles["map-container"]}>
                    <Map center={place.location} zoom={16} />
                </div>
            </Modal>

            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
                footerClass="place-item__modal-actions"
                footer={
                    <>
                        <Button inverse onClick={cancelDeleteHandler}>
                            CANCEL
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            DELETE
                        </Button>
                    </>
                }
            >
                <p>
                    Do you want to proceed and delete this place? Please note
                    that this action can't be undone.
                </p>
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
                            <Button danger onClick={showDeleteWarningHandler}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default PlaceItem;
