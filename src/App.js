import React from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

socket.on('connect', () => {
  console.log('Successfully connected!');
});

function addUser() {
  if (socket.connected) {
  socket.emit('addUser', 'Luca');
  }
}

function App() {
  return (
    <header className="App-header">
        <label className="textBoxLabel">Nickname:</label>
        <br></br>
        <input className="textBox" type="text" name="name" />
        <br></br>
        <input className="button" onClick={addUser} type="button" value="Play" />
    </header>
  );
}

export default App;
