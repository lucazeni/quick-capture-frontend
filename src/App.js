import React from 'react';
import './App.css';
import Rooms from './rooms';
import Game from './game';
import User from './user';

import io from 'socket.io-client';
var uuid = require("uuid");

const socket = io.connect('http://localhost:8080', { reconnect: true });
socket.on('dispatchRooms', (test) => {
  console.log(test)
});

export default class ActivePage extends React.Component {
  constructor() {
    super();
    this.state = {
      id: uuid.v4(),
      nickname: '',
      page: 'HOME',
      rooms: []
      
    }
    this.goToRooms = this.goToRooms.bind(this);
    this.goToRoom = this.goToRoom.bind(this);
    this.onChangeNickname = this.onChangeNickname.bind(this);
  }

  onChangeNickname = (event) => {
    this.setState({
      nickname: event.target.value
    })
  }

  goToRooms = () => {
    socket.emit('addUser', this.state.id, this.state.nickname);
    this.setState({
      page: 'ROOMS'
    })
  }

  goToRoom = (roomId, roomName) => {
    socket.emit('addRoom', this.state.id, roomId, roomName);
    this.setState({
      page: 'GAME',
      roomName
    })
  }

  render() {
    if(this.state.page ==="HOME") {
      return (<div><User goToRooms={this.goToRooms} onChangeNickname={this.onChangeNickname}/></div>);
    }
    else if (this.state.page ==="ROOMS") {
      return(<div><Rooms goToRoom={this.goToRoom} nickname={this.state.nickname}/></div>);
    }
    else if (this.state.page ==="GAME") {
      return(<div><Game roomName={this.state.roomName} /></div>);
    }
    return (this.state.page);
  }
}
