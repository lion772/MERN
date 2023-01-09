import React, { ChangeEvent, FC, useReducer } from "react";
import { validate } from "../../../util/validators";
import styles from "./Input.module.css";

interface InputProps {
    errorText: string;
    label?: string | undefined;
    validators: boolean;
    id: string;
    type: string;
    element?: string | undefined;
    placeholder: string;
    rows?: number | undefined;
    initialValue?: string | boolean | undefined;
}

type State = {
    value: any;
    isTouched: boolean;
    isValid: any;
};

type Action = {
    type: string;
    val: any;
    validators: boolean;
};

const inputReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators),
            };
        case "TOUCH": {
            return {
                ...state,
                isTouched: true,
            };
        }
        default:
            return state;
    }
};

const Input: FC<InputProps> = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || "",
        isTouched: false,
        isValid: props.initialValue || false,
    });
    const changeHandler = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        dispatch({
            type: "CHANGE",
            val: e.target.value,
            validators: props.validators,
        });
    };
    const touchHandler = () => {};
    const element =
        props.element === "input" ? (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        );

    return (
        <div
            className={`${styles["form-control"]} ${
                !inputState.isValid && `${styles["form-control--invalid"]}`
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <div className={styles["form-control"]}>{element}</div>
            {!inputState.isValid && props.errorText}
        </div>
    );
};

export default Input;
