// 리액트 생명주기 실습

import React from 'react';
import '../App.css';

class App05 extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor action');
  }
  
  state = {
    count: 10,
  };

  add = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  minus = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  componentDidMount() {
    console.log('componentDidMount action');
  }
  render() {
    console.log('render action');
    return (
      <div>
        <h1> NUMBER : {this.state.count} </h1>
        <button onClick={this.add}> + add </button>
        <button onClick={this.minus}> - minus </button>
      </div>
    );
  }
}

export default App05;
