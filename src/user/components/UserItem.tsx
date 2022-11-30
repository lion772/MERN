import React, { FC } from "react";
import { User } from "../pages/UsersPage";
import styles from "./UserItem.module.css";

interface UserItemProps {
    item: User;
}

const UserItem: FC<UserItemProps> = ({ item }) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
        </div>
    );
};

export default UserItem;
