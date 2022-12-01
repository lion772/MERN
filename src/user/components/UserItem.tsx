import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import { User } from "../pages/UsersPage";
import styles from "./UserItem.module.css";

const UserItem = (props: User) => {
    return (
        <>
            <li className={styles["user-item"]}>
                <Card className={styles["user-item__content"]}>
                    <Link to={`/${props.id}`}>
                        <div className={styles["user-item__image"]}>
                            <Avatar
                                image={props.image}
                                alt={props.name}
                            ></Avatar>
                        </div>
                        <div className={styles["user-item__info"]}>
                            <h2>{props.name}</h2>
                            <h3>
                                {props.placeCount}{" "}
                                {props.placeCount === 1 ? "Place" : "Places"}
                            </h3>
                        </div>
                    </Link>
                </Card>
            </li>
        </>
    );
};

export default UserItem;
