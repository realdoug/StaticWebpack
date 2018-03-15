import React, { Component } from 'react';

export const SimpleReact = () => {
  return <div>Hello from JSX</div>;
}

async function callAPI(term, page = 1) {
  const apikey = '95c34ace-63f5-4d4a-9015-13cecb65f12d';

  let fetchResult = await fetch(`https://content.guardianapis.com/search?api-key=${apikey}&q=${term}&currentPage=${page}`)
  return await fetchResult.json();
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
