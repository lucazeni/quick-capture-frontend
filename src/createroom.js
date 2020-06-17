import React from "react";
import './createroom.css';
import plusIcon from './assets/plus_icon.png'

export default class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="create-room">
            <img className="plus-icon" src={plusIcon}></img>
             <input onChange={this.props.updateName} className="create-room-text-box" type="text" placeholder="Room name.." maxlength="15"></input>
            <button onClick={this.props.appendRoom} className="create-button" type="submit">Create</button>
            </div>
        );
    }
}