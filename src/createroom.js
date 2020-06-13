import React from "react";
import './createroom.css';

export default class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="create-room-container"><button className="create-room-button">Create Room (+)</button>
            </div>
        );
    }
}