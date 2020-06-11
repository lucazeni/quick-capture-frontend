import React from "react";
import './title.css';
export default class Title extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <h1 className="title">
                QUICK CAPTURE
            </h1>
        );
    }
}