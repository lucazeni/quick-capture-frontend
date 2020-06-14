import React from "react";
import './createroom.css';

export default class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="create-room">
             <input className="create-room-text-box" type="text" placeholder="Room name.." name="search2"></input>
            <button className="create-button" type="submit">Create</button>
            </div>
        );
    }
}