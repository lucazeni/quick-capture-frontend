import React from "react";
import './game.css';
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            message: 'hey',
        }
        this.updateName = this.updateName.bind(this);
        this.appendMessage = this.appendMessage.bind(this);
    }

    appendMessage(e) {
        if (e.key === 'Enter') {
            e.target.value = "";
            this.setState({
                messages: [...this.state.messages, <div className="messages">{this.state.message}</div>],
            });
        }
    }

    updateName(event) {
        this.setState({
            message: event.target.value
        });
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
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
                            <input onChange={this.updateName} onKeyDown={this.appendMessage} placeholder="Type a message.." ></input>
                        </div>
                        <div className="message-container">
                            {this.state.messages.map(message => message)}
                        </div>
                        <div style={{ float: "left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>


                    </div>
                </div>
            </div>
        );

    }
}
