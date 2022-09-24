import React, { Component } from "react";
import Board from "../components/game/Board.js";

class Game extends Component<any, any> {

  render() {
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/*status*/}</div>
            <div>{/*TODO*/}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;