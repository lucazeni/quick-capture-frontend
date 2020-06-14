
import React from "react";
import Room from './room';
import './rooms.css';
import SearchBar from "./searchbar";
import CreateRoom from "./createroom";

export default class Rooms extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            rooms: [],
            name: ''

            
        };
        this.appendRoom = this.appendRoom.bind(this);
        this.updateName = this.updateName.bind(this);
    }
  
    appendRoom(){
        this.setState({
            rooms: [...this.state.rooms, <Room name={this.state.name}/>]
        });
    }
    updateName(event){
        this.setState({
         name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <CreateRoom appendRoom={this.appendRoom} updateName={this.updateName}/>
                <div className="rooms-container">
                    <h2 className="rooms-title">ROOMS</h2>
                    <SearchBar/>
                    <div className="box-container">
                    {this.state.rooms.map(room => room)}
                </div>
                </div>
            </div>
        );
    }
}