import React from 'react';
import './App.css';
import Rooms from './rooms';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'HOME'
    };
  }

  goToRooms = () => {
    this.setState({
      page: 'ROOMS'
    })
  }
   
  render() {
    if(this.state.page ==="HOME") {
      return (<header className="App-header">
      <label className="textBoxLabel">Nickname:</label>
      <br></br>
      <input className="textBox" type="text" name="name" />
      <br></br>
      <input className="button" onClick={this.goToRooms} type="button" value="Play" />
    </header>);
    }
    else if (this.state.page ==="ROOMS") {
      return(<header>
      <div>
      <Rooms />
        
      </div>
    </header>);
    }
    return (this.state.page);
  }
}
