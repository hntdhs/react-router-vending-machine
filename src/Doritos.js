import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Doritos() {
    return (
        <Message>
            <h1>YOUR CHOICE IS DORITOS!! DORRRIIIITTTOOOOOOOOS!!</h1>
            <h2>
                <Link to="/">back to the machine</Link>
            </h2>
        </Message>
    )
}

export default Doritos;