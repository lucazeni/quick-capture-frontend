import React from 'react';
import './App.css';
import Rooms from './rooms';
export default class ActivePage extends React.Component {
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
      <input className="textBox" placeholder="Nickname.." type="text" name="name" maxlength="15"/>
      <br></br>
      <input className="button" onClick={this.goToRooms} type="button" value="Play" />
    </header>);
    }
    else if (this.state.page ==="ROOMS") {
      return(
        <div>
          <Rooms />
        </div>
   
       )}
    return (this.state.page);
  }
}
