import C from './constants';
import { v4 } from 'uuid';

export const setUsername = username => ({
    type: C.SET_USERNAME,
    username
});

export const setMin = min => ({
    type: C.SET_MIN,
    min
});

export const setMax = max => ({
    type: C.SET_MAX,
    max
});

export const newGame = max => ({
    type: C.NEW_GAME,
    id: v4(),
    active: true,
    guesses: [],
    number: Math.floor(Math.random() * max),
    timestamp: new Date().toString(),
    winner: false
});

export const saveGame = (id) => ({
    type: C.SAVE_GAME,
    id,
    active: false,
    timestamp: new Date().toString()
});

export const addGuess = (id, number, guesses, guess) => ({
    type: C.ADD_GUESS,
    id,
    guess,
    //guesses: [...guesses, guess],
    winner: number === guess
});
