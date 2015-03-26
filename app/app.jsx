import React from 'react';

export class App extends React.Component {
  constructor() {
    this.state = {count: 100};
  }

  _increaseCount() {
    this.setState({count: this.state.count + 1});
  }
  _decreaseCount() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this._increaseCount()}>Increase Count</button>
        <button onClick={() => this._decreaseCount()}>Decrease Count</button>
      </div>
    );
  }
}

export function run(container) {
  React.render(<App />, container);
}
