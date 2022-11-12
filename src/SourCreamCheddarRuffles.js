import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function SourCreamCheddarRuffles() {
    return (
        <Message>
            <h1>YOU HAVE SELECTED THE RUFFLES OF SOUR CREAM AND CHEDDAR!! THESE ARE DELICIOUS, EAT THEM!!</h1>
            <h2>
                <Link to="/">back to the machine</Link>
            </h2>
        </Message>
    )
}

export default SourCreamCheddarRuffles;