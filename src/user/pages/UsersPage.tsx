import { useCallback, useEffect, useState } from "react";
import UsersList from "../components/UsersList";

export type User = {
    id: string;
    name: string;
    image: string;
    placeCount: number;
};

function mapToId(list: [{ _id: string; image: string; placeCount: number }]) {
    return list.map((item) => {
        const { _id, ...rest } = item;
        return {
            id: _id,
            ...rest,
        };
    });
}

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        const { data: users } = await (
            await fetch("http://localhost:5000/api/users")
        ).json();
        const transformedList = mapToId(users);
        setUsers(transformedList as []);
    }, []);
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <>
            {users.length === 0 && (
                <p title="empty" className="center">
                    No users yet. Don't you want to add one?
                </p>
            )}
            {users.length > 0 && (
                <div>
                    <UsersList items={users} />
                </div>
            )}
        </>
    );
}
