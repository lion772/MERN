import React from "react";
import Input from "../../shared/components/FormElements/Input/Input";

import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/UIElements/Button/Button";
import { useForm } from "../../shared/hooks/form-hook";

export default function NewPlacePage() {
    const [formState, inputHandler] = useForm(
        {
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
        false
    );

    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(formState.inputs);
    };

    return (
        <form className="place-form" onSubmit={onSubmitHandler}>
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
                    id="description"
                    label="description"
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
