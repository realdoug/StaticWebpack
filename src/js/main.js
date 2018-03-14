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
      num: 0
    };
  }


  render() {
    console.log('rendering!');
    return (
      <div className="mainrow">
        <div className="row">
          {this.state.num}
        </div>
        <div className="row">
          <button
            className="btn"
            onClick={() => {
              this.setState({num: this.state.num+1})}
            }
          >
            Change
          </button>
        </div>
      </div>
    )
  }
}
