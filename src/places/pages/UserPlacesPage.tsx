import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../components/PlacesList";

export type Place = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    location: {
        lat: number;
        lng: number;
    };
    creator: string;
};

export default function UserPlacesPage() {
    const [placesList, setPlacesList] = useState<Place[]>([]);
    const { uid } = useParams<any>();

    const fetchPlaces = async () => {
        const { places } = await (
            await fetch("http://localhost:5000/api/places")
        ).json();
        setPlacesList(places);
    };
    useEffect(() => {
        fetchPlaces();
    }, []);

    return (
        <>
            {placesList.length > 0 &&
                placesList.map((place) => (
                    <PlacesList key={place.id} userId={uid} place={place} />
                ))}
        </>
    );
}
