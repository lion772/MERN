import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

interface NavLinksProps {}

const NavLinks: FC<NavLinksProps> = () => {
    return (
        <ul className={styles["nav-links"]}>
            <li>
                <NavLink to="/" exact>
                    ALL USERS
                </NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>
            </li>

            <li>
                <NavLink to="/places/new">ADD PLACE</NavLink>
            </li>

            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
            <li>
                <button>Log in</button>
            </li>
        </ul>
    );
};
export default NavLinks;
