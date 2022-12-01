import React, { FC } from "react";
import Card from "../../shared/components/UIElements/Card";
import { User } from "../pages/UsersPage";
import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

interface UsersListProps {
    items: User[];
}

const UsersList: FC<UsersListProps> = ({ items }) => {
    let content = (
        <>
            <ul>
                {items.map((item) => (
                    <UserItem key={item.id} {...item} />
                ))}
            </ul>
        </>
    );

    return <div className={styles["users-list"]}>{content}</div>;
};

export default UsersList;
