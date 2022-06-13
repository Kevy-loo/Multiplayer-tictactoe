import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import TicGame from './tictactoe/TicGame';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/login' element={<Login/>}/>
      
      </Routes> */}
      <Login/>
      
      <SignUp/>
      <Routes>
        <Route path='/tictactoe' element={<TicGame/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
