import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from './components/Home.jsx'
import CrearJuego from './components/CrearJuego';
import Nav from './components/Nav';
import MorInfo from './components/MorInfo';
import LandingPage from './components/LandingPage';

function App() {
  return (

    <div className="App">

      <Route exact path='/'>
        <LandingPage/>
      </Route>

      <Route exact path='/home' component={Home}/>

      <Route path='/CrearJuego'>
        <CrearJuego/>
      </Route>

      <Route path='/mor:id'>
        <MorInfo/>
      </Route>
    
    </div>
  );
}

export default App;
