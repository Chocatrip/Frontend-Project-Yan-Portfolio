import React from 'react';
import './App.css';
import Student from './components/Student';
import Student2 from './components/Student2';
import Teacher from './components/Teacher';
import Teacher2 from './components/Teacher2';
import Sessionist from './components/Sessionist';
import Sessionist2 from './components/Sessionist2';
import Portada from './components/Portada';
import Resena from './components/Resena';
import Prensa from './components/Prensa';
import Prensa2 from './components/Prensa2';
function App() {
  return (
    <div className="App">
      <Portada />
      <Resena />
      <Student />
      <Student2 />
      <Teacher />
      <Teacher2/>
      <Sessionist />
      <Sessionist2 />
      <Prensa></Prensa>
      <Prensa2></Prensa2>
    </div>
  );
}

export default App;
