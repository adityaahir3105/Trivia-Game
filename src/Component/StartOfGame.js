import React from "react";
import Button from '@mui/material/Button';
import './GameStart.css';
import { Link } from "react-router-dom";

function GameStart(){
    return(
        <div className="start">
        <h1 style={{display:"flex",justifyContent:"center",alignContent:"center"}}>Welcome to Trivia Game</h1>
        <div className="center">
        <Link to="/start">
        <Button size="medium" variant="contained" color="success">Start Game</Button>
        </Link>
        </div>
        </div>
    );
}

export default GameStart;