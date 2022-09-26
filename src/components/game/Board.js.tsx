import React, {Component, ReactNode} from "react";
import Square from "./Square";

interface iProps{
  // value: null | String[];
  squares: String[];
  onClick: Function;
}
interface iState {
}

class Board extends Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
  }
  state:iState = {}
  renderSquare(i:number): ReactNode {
    return <Square
      value = {this.props.squares[i]}
      onClick={()=>this.props.onClick(i)}
    />
  }

  render() {
    // const status: String = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
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