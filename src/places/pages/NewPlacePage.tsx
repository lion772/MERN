import React from "react";
import styles from "./NewPlacePage.module.css";

export default function NewPlacePage() {
    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };
    return (
        <form className={styles["place-form"]} onSubmit={onSubmitHandler}>
            <>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                />
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                />
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                />
            </>
            <button type="submit">Submit</button>
        </form>
    );
}
