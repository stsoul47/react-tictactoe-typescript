import React, {Component} from 'react';
import { Route, Routes} from "react-router-dom";
import './App.css';
import Game from "./pages/Game";

class App extends Component<any, any> {
  render(){
    return (
      <Routes>
        <Route path="/game" element={<Game />}/>
      </Routes>
    )
  }
}

export default App;
