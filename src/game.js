import React from "react";
import './game.css';
export default class Game extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <div className="gameroom-title">Room: {this.props.roomName}</div>
            <div className="pregame-container">
           
                <div className="game-container">

                </div>
                <div className="chat">
                    <div className="chat-title">Chat</div>
                    <div className="chat-textbox">
                    <input placeholder="Type a message.." ></input>
                    </div>
                </div>
            </div>
            </div>
        );

    }
}
