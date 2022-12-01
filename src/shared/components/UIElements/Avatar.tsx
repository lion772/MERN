import React, { CSSProperties, FC, PropsWithChildren } from "react";

import styles from "./Avatar.module.css";

interface AvatarProps {
    className?: string | undefined;
    image: string;
    alt: string;
    width?: string | undefined;
    style?: CSSProperties | undefined;
}

const Avatar: FC<PropsWithChildren<AvatarProps>> = (props) => {
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
