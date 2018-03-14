import React, { Component } from 'react';
export const message = "Hello from another file";
export const setElementValue = (id, value) => {
  document.getElementById(id).innerText = value;
}

export const SimpleReact = () => {
  return <div>Hello from JSX</div>;
}

export class StatefulReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello from the great state of React"
    };
  }


  render() {
    return (
      <div className="mainrow">
        <div className="row">
          {this.state.message}
        </div>
        <div className="row">
          <button
            className="btn"
            onClick={() => {
              this.setState({message: "new state"})}
            }
          >
            Change
          </button>
        </div>
      </div>
    )
  }
}
