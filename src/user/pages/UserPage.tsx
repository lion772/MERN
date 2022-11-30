import { useParams } from "react-router-dom";

export default function UserPage() {
    const { uid } = useParams<any>();
    return (
        <>
            <h1>user detail</h1>
            <h1>{uid}</h1>
        </>
    );
}
