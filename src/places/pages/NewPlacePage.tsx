import React, { useCallback } from "react";
import Input from "../../shared/components/FormElements/Input/Input";
import styles from "./NewPlacePage.module.css";

import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

export default function NewPlacePage() {
    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    const textInputHandler = useCallback(
        (id: string, value: any, isValid: boolean) => {},
        []
    );

    const descriptionInputHandler = useCallback(
        (id: string, value: any, isValid: boolean) => {},
        []
    );

    const addressInputHandler = useCallback(
        (id: string, value: any, isValid: boolean) => {},
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
                    onInput={textInputHandler}
                />
                <Input
                    element="textarea"
                    type="text"
                    id="description"
                    label="description"
                    placeholder="Description"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid description (at least 5 characters)."
                    onInput={descriptionInputHandler}
                />

                <Input
                    element="input"
                    type="text"
                    id="address"
                    label="address"
                    placeholder="Address"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid address."
                    onInput={addressInputHandler}
                />
            </>
            <button type="submit">Submit</button>
        </form>
    );
}
