import React from "react";
import './room.css';

export default class Room extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='room-container'>
                <div className="room-title">{this.props.name}</div>
                <button className="join-button">Join</button>
                <div className="left-align">host:</div>
                <div className="left-align">party size:</div>
            </div>
        );
    }
}