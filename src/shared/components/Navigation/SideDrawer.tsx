import React, { FC, PropsWithChildren, useRef } from "react";
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
    const nodeRef = useRef(null);

    const content = (
        <CSSTransition
            nodeRef={nodeRef}
            in={show}
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
            <aside
                ref={nodeRef}
                className={styles["side-drawer"]}
                onClick={onClose}
            >
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
