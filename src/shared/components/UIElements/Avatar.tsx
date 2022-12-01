import React, { CSSProperties, FC } from "react";

import styles from "./Avatar.module.css";

interface AvatarProps {
    className: string;
    image: string;
    alt: string;
    width: string;
    style: CSSProperties | undefined;
}

const Avatar: FC<AvatarProps> = (props) => {
    return (
        <div
            className={`${styles.avatar} ${props.className}`}
            style={props.style}
        >
            <img
                src={props.image}
                alt={props.alt}
                style={{ width: props.width, height: props.width }}
            />
        </div>
    );
};

export default Avatar;
