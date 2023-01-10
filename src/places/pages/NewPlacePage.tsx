import React from "react";
import Input from "../../shared/components/FormElements/Input/Input";
import styles from "./NewPlacePage.module.css";

import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

export default function NewPlacePage() {
    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };
    return (
        <form className={styles["place-form"]} onSubmit={onSubmitHandler}>
            <>
                <Input
                    type="text"
                    id="title"
                    label="title"
                    element="input"
                    placeholder="Title"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid title."
                />
                <Input
                    type="text"
                    id="description"
                    label="description"
                    placeholder="Description"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid description."
                />

                <Input
                    type="text"
                    id="address"
                    label="address"
                    element="input"
                    placeholder="Address"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid address."
                />
            </>
            <button type="submit">Submit</button>
        </form>
    );
}
