import React, { FC, PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";

import styles from "./MainNavigation.module.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

//presentational component
const MainNavigation: FC<PropsWithChildren> = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
        <>
            <SideDrawer>
                <nav className={styles["main-navigation__drawer-nav"]}>
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button
                    className={styles["main-navigation__menu-btn"]}
                    onClick={openDrawerHandler}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className={styles["main-navigation__title"]}>
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className={styles["main-navigation__header-nav"]}>
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    );
};

export default MainNavigation;
