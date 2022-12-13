import React, { FC, MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

import "./Button.css";

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    children?: ReactNode | undefined;
    href?: string | undefined;
    inverse?: boolean | undefined;
    size?: string | undefined;
    danger?: boolean | undefined;
    to?: string | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean | undefined;
}

const Button: FC<ButtonProps> = (props) => {
    if (props.href) {
        return (
            <a
                className={`button button--${props.size || "default"} ${
                    props.inverse && "button--inverse"
                } ${props.danger && "button--danger"}`}
                href={props.href}
            >
                {props.children}
            </a>
        );
    }
    if (props.to) {
        return (
            <Link
                to={props.to}
                className={`button button--${props.size || "default"} ${
                    props.inverse && "button--inverse"
                } ${props.danger && "button--danger"}`}
            >
                {props.children}
            </Link>
        );
    }
    return (
        <button
            className={`button button--${props.size || "default"} ${
                props.inverse && "button--inverse"
            } ${props.danger && "button--danger"}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
