import React, { Component } from 'react';
import Reaction from './components/Reaction';
import { GuessContainer } from './components/connectors';
import { FinalContainer } from './components/connectors';
import './App.css';
import { COLD_REACTIONS, HOT_REACTIONS } from './ReactionsData.js';

class App extends Component {
    componentWillMount() {
        if (!this.props.game) {
            this.props.onInit(this.props.max);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.game) {
            this.props.onInit(nextProps.max);
        }
    }

    getDistance(number, guess) {
        return Math.abs(number - guess);
    }

    render() {
        if(!this.props.game) {
            return <div>Loading...</div>
        }
        const { guesses, number } = this.props.game;
        const _prevGuess = guesses.length - 2;
        const _prevDistance = this.getDistance(number, guesses[_prevGuess]);
        const _currentGuess = guesses.length - 1;
        const _currentDistance = this.getDistance(number, _currentGuess);
        const _better = _prevDistance > _currentDistance;

        let coldReaction = <p />;
        let hotReaction = <p />;

        if (this.props.game.guesses.length > 1 && !this.props.game.winner) {
            if (!_better) {
                coldReaction = (
                    <Reaction
                        distance={_currentDistance}
                        reactions={COLD_REACTIONS}
                        reactionType={'cold'}
                    />
                );
            } else if (_better) {
                hotReaction = (
                    <Reaction
                        distance={_currentDistance}
                        reactions={HOT_REACTIONS}
                        reactionType={'hot'}
                    />
                );
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
                        {this.props.game.winner ? <FinalContainer /> : <GuessContainer />}
                    </div>
                    <div className="four columns">
                        {hotReaction}
                    </div>
                </div>
                <footer className="row">
                    <div className="twelve column">
                        <p>
                            Build by Ria Carmin | Find this project on{' '}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/AkimaLunar/react-hot-cold"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                </footer>
            </main>
        );
    }
}

export default App;
