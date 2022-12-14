import React, { FC } from "react";
import { createPortal } from "react-dom";

import styles from "./Backdrop.module.css";

interface BackdropProps {
    onClose: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onClose }) => {
    return createPortal(
        <aside className={styles["backdrop"]} onClick={onClose}></aside>,
        document.getElementById("backdrop-hook") as Element
    );
};

export default Backdrop;
