import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";

import styles from "./MainNavigation.module.css";

//presentational component
const MainNavigation: FC<PropsWithChildren> = (props) => {
    const openDrawerHandler = () => {};
    return (
        <MainHeader>
            <button
                className="main-navigation__menu-btn"
                onClick={openDrawerHandler}
            >
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">YourPlaces</Link>
            </h1>
            <nav>...</nav>
        </MainHeader>
    );
};

export default MainNavigation;
