import React from "react";
import './room.css';

export default class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: this.props.roomName
        }
    }

    joinRoom = () => {
        this.props.joinRoomCallback(this.state.roomName);
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