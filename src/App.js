import React from 'react';
import './App.css';
import Contact from './components/Contact';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contact
        avatar = "https://randomuser.me/api/portraits/women/95.jpg"
        name = "Debra Marshal"
        online
        />
        <Contact
        avatar = "https://randomuser.me/api/portraits/men/2.jpg"
        name = "Eugene Payne"
        online
        />
        <Contact
        avatar = "https://randomuser.me/api/portraits/women/12.jpg"
        name = "Tammy Wilson"
        />
      </header>
    </div>
  );
}

export default App;
