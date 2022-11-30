import React, { FC } from "react";
import { User } from "../pages/UsersPage";
import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

interface UsersListProps {
    items: User[];
}

const UsersList: FC<UsersListProps> = ({ items }) => {
    let content = (
        <div className="center">No users yet. Don't you want to add one?</div>
    );

    if (items.length > 0) {
        content = (
            <ul>
                {items.map((item) => (
                    <UserItem key={item.id} item={item} />
                ))}
            </ul>
        );
    }
    return <div className={styles.UsersList}>{content}</div>;
};

export default UsersList;
