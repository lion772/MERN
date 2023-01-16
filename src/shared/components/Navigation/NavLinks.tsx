import React, { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import styles from "./NavLinks.module.css";

interface NavLinksProps {}

const NavLinks: FC<NavLinksProps> = () => {
    const authCtx = useContext(AuthContext);

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
            {authCtx.isLoggedIn && (
                <li>
                    <NavLink
                        to="/639620c5842324dfdaa37c54/places"
                        className={(isActive) =>
                            isActive ? styles["active"] : ""
                        }
                    >
                        MY PLACES
                    </NavLink>
                </li>
            )}

            {authCtx.isLoggedIn && (
                <li>
                    <NavLink
                        to="/places/new"
                        className={(isActive) =>
                            isActive ? styles["active"] : ""
                        }
                    >
                        ADD PLACE
                    </NavLink>
                </li>
            )}

            {!authCtx.isLoggedIn && (
                <li>
                    <NavLink
                        to="/auth"
                        className={(isActive) =>
                            isActive ? styles["active"] : ""
                        }
                    >
                        AUTHENTICATE
                    </NavLink>
                </li>
            )}

            <li>
                <button>Log in</button>
            </li>
        </ul>
    );
};
export default NavLinks;
