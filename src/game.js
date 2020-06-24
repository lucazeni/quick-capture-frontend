import React from "react";
import './game.css';
export default class Game extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pregame-container">
             <div>{this.props.roomName}</div>
                <div className="game-container">

                </div>
                <div className="chat">
                    <input placeholder="Type a message.." className="chat-textbox"></input>
                </div>
            </div>
        );

    }
}
