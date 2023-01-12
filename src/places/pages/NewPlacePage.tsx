import React, { useCallback, useReducer } from "react";
import Input from "../../shared/components/FormElements/Input/Input";
import styles from "./NewPlacePage.module.css";

import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/UIElements/Button/Button";

type Action = {
    type: string;
    inputId: string;
    value: any;
    isValid: boolean;
};

const formReducer = (state: any, action: Action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                },
                isValid: formIsValid,
            };

        default:
            return state;
    }
};

export default function NewPlacePage() {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: "",
                isValid: false,
            },
            description: {
                value: "",
                isValid: false,
            },
            address: {
                value: "",
                isValid: false,
            },
        },
        isValid: false,
    });
    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(formState.inputs);
    };

    const inputHandler = useCallback(
        (id: string, value: any, isValid: boolean) => {
            dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
        },
        []
    );

    return (
        <form className={styles["place-form"]} onSubmit={onSubmitHandler}>
            <>
                <Input
                    element="input"
                    type="text"
                    id="title"
                    label="title"
                    placeholder="Title"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid title."
                    onInput={inputHandler}
                />
                <Input
                    element="textarea"
                    type="text"
                    id="description"
                    label="description"
                    placeholder="Description"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid description (at least 5 characters)."
                    onInput={inputHandler}
                />

                <Input
                    element="input"
                    type="text"
                    id="address"
                    label="Address"
                    placeholder="Address"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid address."
                    onInput={inputHandler}
                />
            </>
            <Button type="submit" disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    );
}
