import React, { Component } from 'react';
import Guess from './components/Guess';
import Reaction from './components/Reaction';
import Final from './components/Final';
import './App.css';
import { COLD_REACTIONS, HOT_REACTIONS } from './ReactionsData.js';

class App extends Component {
  state = {
    min: 0,
    max: 100,
    guesses: [],
    number: null,
    currentDistance: null,
    better: false,
    winner: false
  }
  componentWillMount(){
    this.setNumber();
  }
  setNumber(){
    const _number = Math.floor(Math.random()*this.state.max);
    this.setState({
      number: _number,
      guesses: [],
      currentDistance: null,
      better: false,
      winner: false
    })
  }
  setBetter(better){
    this.setState({better});
  }
  getDistance(number, guess){
    return Math.abs(number-guess);
  }
  addGuess(value){
    const _lastGuess = this.state.guesses.length-1;
    const _prevDistance = this.getDistance(this.state.number, this.state.guesses[_lastGuess]);
    const _currentDistance = this.getDistance(this.state.number, value);
    const _newGuess = [...this.state.guesses, value];
    this.setState({
      guesses: _newGuess,
      currentDistance: _currentDistance,
      better: _prevDistance > _currentDistance,
      winner: _currentDistance === 0
    });
  }

  render() {    
    let coldReaction = <p />;
    let hotReaction = <p />;
    if(this.state.guesses.length > 1 && !this.state.winner) {
      if (!this.state.better){
        coldReaction = <Reaction distance={this.state.currentDistance} reactions={COLD_REACTIONS} reactionType={'cold'}/>
      } else if (this.state.better){
        hotReaction = <Reaction distance={this.state.currentDistance} reactions={HOT_REACTIONS} reactionType={'hot'} />
      }
    }

    return (
      <main className="container">
        <nav className="row">
          <div className="twelve column">
            <h1 className="title">Hot&amp;Cold</h1>
          </div>
        </nav>

        <div className="row app__container">
          <div className="four columns">
            {coldReaction}
          </div>
          
          <div className="four columns">
            {(this.state.winner)
              ? <Final number={this.state.number} onReset={()=>this.setNumber()} />
              : <Guess min={this.state.min} max={this.state.max} onGuess={(value) => this.addGuess(value)}/>
            } 
          </div>
          <div className="four columns">
            {hotReaction}
          </div>
        </div>
        <footer className="row">
          <div className="twelve column">
            <p>Build by Ria Carmin | Find this project on <a rel="noopener noreferrer" target="_blank" href="https://github.com/AkimaLunar/react-hot-cold">GitHub</a></p>
          </div>
        </footer>
      </main>
    )
  }
}

export default App;
