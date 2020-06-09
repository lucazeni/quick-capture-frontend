import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="App-header">
    <form>
  <label>
    Nickname:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Enter" />
</form>
</header>
  );
}

export default App;
