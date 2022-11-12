import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function ChiliCheeseFritos() {
    return (
        <Message>
            <h1>YOUR CHOICE HAS BEEN CHILI CHEESE FRITOS!! YOU ARE NOW A REAL COWBOY!!</h1>
            <h2>
                <Link to="/">back to the machine</Link>
            </h2>
        </Message>
    )
}

export default ChiliCheeseFritos;