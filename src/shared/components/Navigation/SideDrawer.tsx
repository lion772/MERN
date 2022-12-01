import React, { FC, PropsWithChildren } from "react";
import styles from "./SideDrawer.module.css";

const SideDrawer: FC<PropsWithChildren> = ({ children }) => {
    const content = <aside className={styles["side-drawer"]}>{children}</aside>;

    return content;
};

export default SideDrawer;
