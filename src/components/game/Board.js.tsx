import React, {Component, ReactNode} from "react";
import Square from "./Square";

class Board extends Component<any, any> {
  renderSquare(i:any): ReactNode {
    return <Square />
  }

  render() {
    const status: String = 'Next Player: X';
    return (
      <div>
        <div className="status">{ status }</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;