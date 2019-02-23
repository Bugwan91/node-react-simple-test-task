import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock.js';

async function fetchTime() {
  const response = await fetch('http://127.0.0.1:3001');
  const responseData = await(response.json());
  return responseData.serverTime;
}

class App extends Component {
  constructor(params) {
    super(params);
    this.state = {
      currentTime: null
    };
    this.nextTick = this.nextTick.bind(this);
  }

  componentWillMount() {
    fetchTime()
      .then(serverTime => {
        let date = new Date(serverTime);
        this.setState({
          currentTime: serverTime
        }, this.nextTick)
      })
      .catch(e => {
        console.log(e);
      })
  }

  nextTick() {
    setTimeout(() => {
      this.setState({
        currentTime: this.state.currentTime + 1000
      });
      this.nextTick();
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <Clock currentTime={this.state.currentTime}/>
      </div>
    );
  }
}

export default App;
