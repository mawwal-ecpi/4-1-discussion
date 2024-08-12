import React, { useState } from "react";
import Button from "../UI/Button";

const Message = (props) => {
    const [enteredMessage, setEnteredMessage] = useState("");
    const [error, setError] = useState();

    const addMessageHandler = (event) => {
        event.preventDefault();
        if (enteredMessage.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid message (non-empty values)."
            });
            return;
        }

        props.onAddMessage(enteredMessage);
        setEnteredMessage("");
    };

    const messageChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    };

    return (
        <div>
            {error && (
                <h1>{error.message}</h1>
            )}
            <form onSubmit={addMessageHandler}>
                <label htmlFor="message">Message </label>
                <input
                    id="message"
                    type="text"
                    value={enteredMessage}
                    onChange={messageChangeHandler}
                />
                <Button type="submit">Display Message</Button>
            </form>
        </div>
    );
}

export default Message;