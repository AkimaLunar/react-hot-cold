import { connect } from 'react-redux';
import App from '../App';
import Guess from './Guess';
import Final from './Final';
import Reaction from './Guess';

import { setUsername, newGame, saveGame, addGuess } from '../store/actions';

export const CurrentGame = connect(
    state => {
        return {
            username: state.username,
            min: state.min,
            max: state.max,
            game: state.games.filter(g => g.active === true)[0]
        }
    },
    dispatch => ({
        onInit(number) {
            dispatch(newGame(number));
        }
    })
)(App);

export const GuessContainer = connect(
    state => ({
        min: state.min,
        max: state.max,
        game: state.games.filter(g => g.active === true)[0]
    }),
    dispatch => ({
        onGuess(id, number, guesses, guess) {
            dispatch(addGuess(id, number, guesses, guess));
        }
    })
)(Guess);

export const FinalContainer = connect(
    state => ({
        game: state.games.filter(g => g.active === true)[0]
    }),
    dispatch => ({
        onReset(id, number, guess) {
            dispatch(saveGame(id));
        }
    })
)(Final);
