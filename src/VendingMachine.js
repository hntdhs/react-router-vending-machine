import React, {Component} from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

class VendingMachine extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>hey hey hey it's the vending machine, make a decision</h1>
                </Message>
                <Message>
                    <h3><Link to="/Doritos">doritos</Link></h3>
                    <h3><Link to="/ChiliCheeseFritos">chili cheese fritos</Link></h3>
                    <h3><Link to="/SourCreamCheddarRuffles">sour cream cheddar ruffles</Link></h3>
                </Message>
            </div>
        )
    }
}

export default VendingMachine;
