import React from "react";
import './room.css';

export default class Room extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='room-container'>
                <div className="room-title">{this.props.roomName}</div>
                <button className="join-button">Join</button>
                <div className="left-align">Host: {this.props.host}</div>
            </div>
        );
    }
}