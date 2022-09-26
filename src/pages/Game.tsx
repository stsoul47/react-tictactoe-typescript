import React, { Component } from "react";
import Board from "../components/game/Board.js";

interface iProps{
}
interface iState {
  // squares: null[] | String[];
  history: {
    squares: String[];
  }[];
  stepNumber: number,
  xIsNext: boolean;
}

class Game extends Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
  }
  state: iState = {
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber:0,
    xIsNext: true,
  }

  handleClick(i:number): void {
    // const squares = this.state.squares.slice();
    // const history = this.state.history;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current: any = null;
    let squares: String[] = [];
    if (history) {
      current = history[this.state.stepNumber];
    }
    if(current) {
      squares = current.squares.slice();
    }
    if(this.calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  calculateWinner(squares: String[]): null | String {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner: null | String = this.calculateWinner(current.squares);
    const moves = history.map((step, move) =>{
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return(
        <li key={move}><button onClick={()=> this.jumpTo(move)}>{desc}</button></li>
      )
    })

    let status: String = "";
    if(winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i: any) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <div>{moves}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;