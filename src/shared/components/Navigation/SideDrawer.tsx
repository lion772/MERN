import React, { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import styles from "./SideDrawer.module.css";
import { CSSTransition } from "react-transition-group";

interface SideDrawerProps {
    onClose: () => void;
    show: any;
}

const SideDrawer: FC<PropsWithChildren<SideDrawerProps>> = ({
    children,
    onClose,
    show,
}) => {
    const content = (
        <CSSTransition
            in={show}
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
            <aside className={styles["side-drawer"]} onClick={onClose}>
                {children}
            </aside>
        </CSSTransition>
    );

    return createPortal(
        content,
        document.getElementById("modal-root") as Element
    );
};

export default SideDrawer;
