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
            {users.length === 0 && (
                <p title="empty" className="center">
                    No users yet. Don't you want to add one?
                </p>
            )}
            {users.length > 0 && (
                <div title="finished">
                    <UsersList items={users} />
                </div>
            )}
        </>
    );
}
