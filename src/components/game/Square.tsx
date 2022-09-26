import React, {Component} from "react";

interface iProps{
  value: null | String;
  onClick: Function
}
interface iState {
  // value: null | String;
}

class Square extends Component<iProps, iState>{
  constructor(props: iProps) {
    super(props);
  }

  // state:iState={
  //   value: null
  // }

  render() {
    return (
      // <div></div>
      <button className="square"
        onClick={()=>this.props.onClick()}
      >{ this.props.value }</button>
    );
  }
}
export default Square;