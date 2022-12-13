import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

interface NavLinksProps {}

const NavLinks: FC<NavLinksProps> = () => {
    return (
        <ul className={styles["nav-links"]}>
            <li>
                <NavLink
                    to="/"
                    className={(isActive) => (isActive ? styles["active"] : "")}
                    exact
                >
                    ALL USERS
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/639620c5842324dfdaa37c54/places"
                    className={(isActive) => (isActive ? styles["active"] : "")}
                >
                    MY PLACES
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/places/new"
                    className={(isActive) => (isActive ? styles["active"] : "")}
                >
                    ADD PLACE
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/auth"
                    className={(isActive) => (isActive ? styles["active"] : "")}
                >
                    AUTHENTICATE
                </NavLink>
            </li>
            <li>
                <button>Log in</button>
            </li>
        </ul>
    );
};
export default NavLinks;
