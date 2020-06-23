import React from 'react';
import './App.css';
import Rooms from './rooms';
import User from './user';
export default class ActivePage extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: '',
      page: 'HOME'
    };
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
    this.setState({
      page: 'ROOMS'
    })
  }

  goToRoom = (room) => {
    console.log(room);
    this.setState({
      page: 'ROOM'
    })
  }
  
  render() {
    if(this.state.page ==="HOME") {
      return (<div><User goToRooms={this.goToRooms} onChangeNickname={this.onChangeNickname}/></div>);
    }
    else if (this.state.page ==="ROOMS") {
      return(<div><Rooms goToRoom={this.goToRoom} nickname={this.state.nickname}/></div>);
    }
    else if (this.state.page ==="ROOM") {
      return(<div>you're in a room w/ me</div>);
    }
    return (this.state.page);
  }
}
