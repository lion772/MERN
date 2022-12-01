import { useParams } from "react-router-dom";
import PlacesList from "../components/PlacesList";

export default function UserPlacesPage() {
    const { uid } = useParams<any>();
    return (
        <>
            <PlacesList userId={uid} />
        </>
    );
}
