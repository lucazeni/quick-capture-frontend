
import React from "react";
import Room from './room';
import './rooms.css';
import SearchBar from "./searchbar";
import CreateRoom from "./createroom";
export default class Rooms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rooms-container">
                <h2 className="rooms-title">ROOMS</h2>
                <SearchBar />
                <CreateRoom />
                <Room name="test"/>
                <Room name="luca"/>
                <Room name="test"/>
                <Room name="luca"/>
                <Room name="test"/>
                <Room name="luca"/>
                <Room name="test"/>
                <Room name="luca"/>
                <Room name="test"/>
                <Room name="luca"/>
            </div>
        );
    }
}