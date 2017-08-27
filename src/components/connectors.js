import { connect } from 'react-redux';
import App from '../App';
import Guess from './Guess';
import Final from './Final';

import { newGame, saveGame, addGuess } from '../store/actions';

export const CurrentGame = connect(
    state => {
        return {
            username: state.username,
            min: state.min,
            max: state.max,
            game: state.games.filter(g => g.active === true)[0]
        };
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
        onGuess(id, number, guess) {
            dispatch(addGuess(id, number, guess));
        }
    })
)(Guess);

export const FinalContainer = connect(
    state => ({
        game: state.games.filter(g => g.active === true)[0]
    }),
    dispatch => ({
        onReset(id) {
            dispatch(saveGame(id));
        }
    })
)(Final);
