import { connect } from 'react-redux'
import App from '../App';
import Guess from './Guess';
import Final from './Final';
import Reaction from './Guess';

import { setUsername, newGame, saveGame, addGuess } from '../store/actions'

export const CurrentGame = connect(
    state =>
        ({  
            username: username,
            min: state.min,
            max: state.max,
            game: state.games[state.games.length-1],
            currentDistance: Math.abs(number-guess);,
            better: false,
            winner: false,
        }),
    dispatch =>
        ({
            onGuess(id, num) {
                dispatch(addGuess(id, num))
            }
        })
)(App)
