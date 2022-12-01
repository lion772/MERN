import React, { CSSProperties, FC, PropsWithChildren } from "react";

import styles from "./Card.module.css";

interface CardProps {
    className?: string | undefined;
    style?: CSSProperties | undefined;
}

const Card: FC<PropsWithChildren<CardProps>> = (props) => {
    return (
        <div
            className={`${styles.card} ${props.className}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

export default Card;
