import React from "react";
import './room.css';
var uuid = require("uuid");

export default class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomId: uuid.v4(),
            roomName: this.props.roomName
        }
    }

    joinRoom = () => {
        this.props.joinRoomCallback(this.state.roomId, this.state.roomName);
    }


    render() {
        return (
            <div className='room-container'>
                <div className="room-title">{this.state.roomName}</div>
                <button onClick={this.joinRoom} className="join-button">Join</button>
                <div className="left-align">Host: {this.props.host}</div>
            </div>
        );
    }
}