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
             <input onChange={this.props.updateName} className="create-room-text-box" type="text" placeholder="Room name.." maxlength="15"></input>
            <img className="plus-icon" src={plusIcon} onClick={this.props.appendRoom} type="submit"></img>
            </div>
        );
    }
}