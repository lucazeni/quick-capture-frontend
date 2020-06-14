
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
            name: '',
            showRooms: []

            
        };
        this.appendRoom = this.appendRoom.bind(this);
        this.updateName = this.updateName.bind(this);
        this.filterRooms = this.filterRooms.bind(this);
    }
  
    filterRooms(event) {
        if (!event.target.value) {
            this.setState({
                showRooms: this.state.rooms
               });
        }
        else {
        this.setState({
            showRooms: this.state.rooms.filter((room) => room.props.name.includes(event.target.value))
           });
        }
    }

    appendRoom(){
        this.setState({
            rooms: [...this.state.rooms, <Room name={this.state.name}/>],
            showRooms: [...this.state.showRooms, <Room name={this.state.name}/>]
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
                    <SearchBar filterRooms={this.filterRooms}/>
                    <div className="box-container">
                    {this.state.showRooms.map(room => room)}
                </div>
                </div>
            </div>
        );
    }
}