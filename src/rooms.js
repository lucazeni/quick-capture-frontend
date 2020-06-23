
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
            roomName: '',
            showRooms: [],

            
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
            showRooms: this.state.rooms.filter((room) => 
                room.props.roomName.includes(event.target.value))
           });
        }
    }

    appendRoom(){
        this.setState({
            rooms: [...this.state.rooms, <Room host={this.props.nickname} roomName={this.state.roomName}/>],
            showRooms: [...this.state.showRooms, <Room host={this.props.nickname} roomName={this.state.roomName}/>]
        });
    }

    updateName(event){
        this.setState({
         roomName: event.target.value
        });
    }


    render() {
        return (
         
               
                <div className="rooms-container">
                    <div className="nickname-container">Nickname: {this.props.nickname}</div>
                    <CreateRoom appendRoom={this.appendRoom} updateName={this.updateName}/>
                    <h2 className="rooms-title">ROOMS</h2>
                    <SearchBar filterRooms={this.filterRooms}/>
                    <div className="box-container">
                        {this.state.showRooms.map(room => <Room joinRoomCallback={this.props.goToRoom} roomName={room.props.roomName} host={room.props.host}/>)}
                    </div>
                </div>
         
        );
    }
}