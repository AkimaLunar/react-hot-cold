import React, { Component } from 'react';
// import Guess from './components/Guess';
 import Reaction from './components/Reaction';
// import Hot from './components/Hot';
// import Final from './components/Final';
import './App.css';

class App extends Component {
  state = {
    guesses: [4],
    number: null,
    better: false,
    coldReactions: [
      'https://media.giphy.com/media/SDogLD4FOZMM8/giphy.gif',
      'https://media.giphy.com/media/77xrxjer0slgc/giphy.gif',
      'https://media.giphy.com/media/z5WtAAaFpnIgU/giphy.gif',
      'https://media.giphy.com/media/YWFmlljmSpo6k/giphy.gif',

    ],
    hotReactions: [
      'https://media.giphy.com/media/1tHzw9PZCB3gY/giphy.gif',
      'http://media.giphy.com/media/8vpeyWA3OWOhG/giphy.gif',
      'https://media.giphy.com/media/S8LWP0CotPAQw/giphy.gif',
      'https://media.giphy.com/media/l4HodBpDmoMA5p9bG/giphy.gif'
    ]

  }
  componentWillMount(){
    this.setNumber();
  }
  setNumber(){
    const _number = Math.floor(Math.random()*100);
    this.setState({number: _number})
  }
  addGuess(newGuess){
    const _newGuess = [...this.state.guesses, newGuess];
    this.setState({guesses: _newGuess});
  }
  getDistance(number, guess){
    return Math.abs(number-guess);
  }
  render() {
    const _lastGuess = this.state.guesses.length-1;
    const _prevDistance = this.getDistance(this.state.number, this.state.guesses[_lastGuess-2]);
    const _currentDistance = this.getDistance(this.state.number, this.state.guesses[_lastGuess]);

    return (
      <main className="container">
        <div className="row">
          <div className="twelve column">
            <h1 className="title">Hot&amp;Cold</h1>
          </div>
        </div>

        <div className="row">
          <div className="four columns">
            {(_prevDistance < _currentDistance) ? 
                <Reaction number={this.state.number} guess={this.state.guesses[_lastGuess]} reactions={this.state.coldReactions}/>
                : <p></p>
            }
          </div>
          <div className="four columns">
                    <p>{this.state.number}</p>
                    <p>{this.state.guesses[_lastGuess]}</p>
                    <h1>{_currentDistance}</h1>
                    <button onClick={() => this.addGuess(Math.floor(Math.random()*100))}>Guess</button>
          </div>
          <div className="four columns">
            {(_prevDistance >= _currentDistance) ? 
            <Reaction number={this.state.number} guess={this.state.guesses[_lastGuess]} reactions={this.state.hotReactions}/> 
            : <p></p>
            }
          </div>
        </div>



      </main>
    )
  }
}

export default App;
