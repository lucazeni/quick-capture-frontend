import React from "react";
import './user.css';
export default class User extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="user-container">
            <input className="textBox" onChange={this.props.onChangeNickname} placeholder="Nickname.." type="text" name="name" maxlength="15"/>
            <br></br>
            <input className="button" onClick={this.props.goToRooms} type="button" value="Play" />
            </div>
        );

    }
}
