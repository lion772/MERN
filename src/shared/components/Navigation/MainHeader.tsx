import React, { FC, PropsWithChildren } from "react";

import styles from "./MainHeader.module.css";

//presentational component
const MainHeader: FC<PropsWithChildren> = (props) => {
    return <header className={styles["main-header"]}>{props.children}</header>;
};

export default MainHeader;
