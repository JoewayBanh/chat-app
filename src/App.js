import React from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactList/>
        {/* <Contact
        avatar = "https://randomuser.me/api/portraits/women/95.jpg"
        name = "Debra Mar"
        online
        />
        <Contact
        avatar = "https://randomuser.me/api/portraits/men/2.jpg"
        name = "Euge Payn"
        online
        />
        <Contact
        avatar = "https://randomuser.me/api/portraits/women/12.jpg"
        name = "Tammy Wil"
        /> */}
      </header>
    </div>
  );
}

export default App;
