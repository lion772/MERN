import { useEffect, useState } from "react";
import UsersList from "../components/UsersList";

export type User = {
    id: string;
    name: string;
    image: string;
    placeCount: number;
};

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const { data: Users } = await (
            await fetch("http://localhost:5000/api/users")
        ).json();
        setUsers(Users);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <UsersList items={users} />
        </>
    );
}
