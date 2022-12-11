import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

interface NavLinksProps {}

const NavLinks: FC<NavLinksProps> = () => {
    /*  const navLinkStyles = ({ isActive: string }) => {
        return {};
    };
 */
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
                    to="/u1/places"
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
