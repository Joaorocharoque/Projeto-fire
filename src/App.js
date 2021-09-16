import React, { useEffect, useState } from "react";
import api from "./services/api";
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import TabelaDrag from './Pages/TabelaDrag';


 function App() {
  return ( 
<>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/TabelaDrag' component={TabelaDrag} />
      </Switch>
    </Router>
  </>
  );
}
export default App;
