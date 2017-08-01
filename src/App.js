import React, { Component } from 'react';
// import Guess from './components/Guess';
import Reaction from './components/Reaction';
// import Final from './components/Final';
import './App.css';

const COLD_REACTIONS = [
      'https://media.giphy.com/media/SDogLD4FOZMM8/giphy.gif',
      'https://media.giphy.com/media/77xrxjer0slgc/giphy.gif',
      'https://media.giphy.com/media/z5WtAAaFpnIgU/giphy.gif',
      'https://media.giphy.com/media/YWFmlljmSpo6k/giphy.gif',
    ];
const HOT_REACTIONS = [
      'https://media.giphy.com/media/1tHzw9PZCB3gY/giphy.gif',
      'http://media.giphy.com/media/8vpeyWA3OWOhG/giphy.gif',
      'https://media.giphy.com/media/S8LWP0CotPAQw/giphy.gif',
      'https://media.giphy.com/media/l4HodBpDmoMA5p9bG/giphy.gif'
    ];

class App extends Component {
  state = {
    guesses: [4],
    number: null,
    currentDistance: null,
    better: false
  }
  componentWillMount(){
    this.setNumber();
  }
  setNumber(){
    const _number = Math.floor(Math.random()*100);
    this.setState({number: _number})
  }
  setBetter(better){
    this.setState({better});
  }
  addGuess(){
    const newGuess = Math.floor(Math.random()*100);
    const _lastGuess = this.state.guesses.length-1;
    const _prevDistance = this.getDistance(this.state.number, this.state.guesses[_lastGuess]);
    const _currentDistance = this.getDistance(this.state.number, newGuess);
    const _newGuess = [...this.state.guesses, newGuess];
    this.setState({
      guesses: _newGuess,
      currentDistance: _currentDistance,
      better: _prevDistance > _currentDistance});
  }
  getDistance(number, guess){
    return Math.abs(number-guess);
  }
  render() {
    let coldReaction = <p />;
    let hotReaction = <p />;

    if (!this.state.better){
      coldReaction = <Reaction distance={this.state.currentDistance} reactions={COLD_REACTIONS}/>
    } else {
      hotReaction = <Reaction distance={this.state.currentDistance} reactions={HOT_REACTIONS}/>
    }

    return (
      <main className="container">
        <div className="row">
          <div className="twelve column">
            <h1 className="title">Hot&amp;Cold</h1>
          </div>
        </div>

        <div className="row">
          <div className="four columns">
            {coldReaction}
          </div>
          
          <div className="four columns temp__app-center">
            <p>{this.state.number}</p>
            <p>{this.state.guesses[this.state.guesses.length-1]}</p>
            <h1>{this.state.currentDistance}</h1>
            <button onClick={() => this.addGuess()}>Guess</button>
          </div>
          <div className="four columns">
            {hotReaction}
          </div>
        </div>
      </main>
    )
  }
}

export default App;
