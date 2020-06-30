import React from 'react';
import './App.css';
import Rooms from './rooms';
import Game from './game';
import User from './user';

import io from 'socket.io-client';
var uuid = require("uuid");
var socket = io.connect('http://localhost:8080', { reconnect: true });

export default class ActivePage extends React.Component {
  constructor() {
    super();
    this.state = {
      id: uuid.v4(),
      nickname: '',
      roomId: '',
      roomName: '',
      page: 'HOME',

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

  goToRooms = async () => {
    await this.setState({
      page: 'ROOMS'
    })
    this.command('addUser');
  }

  goToRoom = async (roomId, roomName) => {
    console.log(roomId);
    console.log(roomName);
    await this.setState({
      page: 'GAME',
      roomId: roomId,
      roomName: roomName
    });
    this.command('addRoom');
  }

  command(c) {
    if (c === 'addUser') {
      socket.emit('addUser', this.state.id, this.state.nickname);
    }
    else if (c === 'addRoom') {
      socket.emit('addRoom', this.state.id, this.state.roomId, this.state.roomName);
    }
  }

  componentDidMount() {
    socket.on('dispatchRooms', (playerMap) => {
      console.log(playerMap);
    });
  }

  render() {
    if (this.state.page === "HOME") {
      return (<div><User goToRooms={this.goToRooms} onChangeNickname={this.onChangeNickname} /></div>);
    }
    else if (this.state.page === "ROOMS") {
      return (<div><Rooms goToRoom={this.goToRoom} nickname={this.state.nickname} /></div>);
    }
    else if (this.state.page === "GAME") {
      return (<div><Game roomName={this.state.roomName} /></div>);
    }
    return (this.state.page);
  }
}
