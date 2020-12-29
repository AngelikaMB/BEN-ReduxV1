import React from 'react'
import WeaponGenWrapper from './Components/WeaponGenWrapper'
import './CSS/App.css';

function App() {
  return (
    <div className="App">
      <header> NavBar </header>
      <main>
    <WeaponGenWrapper />
      </main>
    <footer>Footer Links </footer>
    </div>
  );
}

export default App;
