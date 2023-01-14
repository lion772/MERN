import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/UIElements/Button/Button";
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
    const [isLoading, setIsLoading] = useState(true);
    const param = useParams<any>();

    const fetchPlaces = useCallback(async () => {
        const { places } = await (
            await fetch("http://localhost:5000/api/places", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(param),
            })
        ).json();
        setIsLoading(false);

        setPlacesList(places);
    }, [param]);

    useEffect(() => {
        fetchPlaces();
    }, [fetchPlaces]);

    if (!isLoading && placesList.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>
                        No list to display. Don't you want to create a place?
                    </h2>
                    <Button>Share Place</Button>
                </Card>
            </div>
        );
    }

    return <>{placesList.length > 0 && <PlacesList items={placesList} />}</>;
}
