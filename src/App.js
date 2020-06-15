import React from 'react';
import './App.css';
import Rooms from './rooms';
import User from './user';
export default class ActivePage extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'HOME'
    };
    this.goToRooms = this.goToRooms.bind(this);
  }

  goToRooms = () => {
    this.setState({
      page: 'ROOMS'
    })
  }
  
  render() {
    if(this.state.page ==="HOME") {
      return (<div><User goToRooms={this.goToRooms}/></div>);
    }
    else if (this.state.page ==="ROOMS") {
      return(<div><Rooms /></div>);
    }
    return (this.state.page);
  }
}
