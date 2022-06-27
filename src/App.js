import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import GameStart from './Component/StartOfGame'
import Question from './Component/Questions';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<GameStart/>}></Route>
    <Route exact path="/start" element={<Question/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
