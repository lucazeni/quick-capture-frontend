import React from "react";
export default class Pregame extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="user-container">
            {this.props.roomName}
            </div>
        );

    }
}
