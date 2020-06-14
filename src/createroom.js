import React from "react";
import './createroom.css';

export default class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="create-room">
             <input onChange={this.props.updateName} className="create-room-text-box" type="text" placeholder="Room name.." maxlength="15"></input>
            <button onClick={this.props.appendRoom} className="create-button" type="submit">Create</button>
            </div>
        );
    }
}