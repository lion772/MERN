import React, { FC } from "react";
import styles from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {
    className?: string | undefined;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ className }) => {
    const classes = `${styles.spinner} ${className}`;
    return <div className={classes}></div>;
};

export default LoadingSpinner;
