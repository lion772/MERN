import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
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
    const param = useParams<any>();

    const fetchPlaces = useCallback(async () => {
        const { places } = await (
            await fetch("http://localhost:5000/api/places", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(param),
            })
        ).json();

        setPlacesList(places);
    }, [param]);

    useEffect(() => {
        fetchPlaces();
    }, [fetchPlaces]);

    if (placesList.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>
                        No list to display. Don't you want to create a place?
                    </h2>
                    <button>Share Place</button>
                </Card>
            </div>
        );
    }

    return <>{placesList.length > 0 && <PlacesList items={placesList} />}</>;
}
