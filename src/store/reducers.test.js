import deepFreeze from 'deep-freeze';
import {
    username,
    game,
    games,
    min,
    max
} from './reducers';

import { 
    setUsername,
    setMin,
    setMax,
    newGame,
    saveGame,
    addGuess
} from './actions';

import C from './constants';

import initialState from './initialState';

describe('Username reducer', () => {
    it('Should set username', () => {
        const state = 'test-start';
        const action = setUsername('test-result');

        deepFreeze(state);
        deepFreeze(action);
        expect(username(state, action)).toEqual('test-result');
    });
});

describe('Min reducer', () => {
    it('Should set min', () => {
        const state = 20;
        const action = setMin(0);
        deepFreeze(state);
        deepFreeze(action);
        expect(min(state,action)).toEqual(0);
    });
});
describe('Max reducer', () => {
    it('Should set max', () => {
        const state = 20;
        const action = setMin(0);
        deepFreeze(state);
        deepFreeze(action);
        expect(min(state,action)).toEqual(0);
    });
});

describe('Games reducer', () => {
    it('Should create a new game (empty)', () => {
        const { max } = initialState;
        const state = [];
        const action = newGame(max);
        deepFreeze(state);
        deepFreeze(action);
        expect(games(state, action)).toHaveLength(1);
    });
    
    it('Should create a new game ', () => {
        const { max } = initialState;
        const game = {
            id: '788b4d96-2245-4bac-a177-c0b80011975e',
            active: false,
            guesses: [],
            number: 82,
            winner: false,
            timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
        };
        const state = [game];
        const action = newGame(max);
        deepFreeze(state);
        deepFreeze(action);
        expect(games(state, action)).toHaveLength(2);
    });
});

describe('Game reducer', () => {
    it('Should create a new game', () => {
        const { max } = initialState;
        const state = { };
        const action = {
            type: C.NEW_GAME,
            id: 'ABC',
            active: false,
            guesses: [],
            number: 44,
            winner: false,
            timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
        };
        deepFreeze(state);
        deepFreeze(action);
        expect(game(state, action))
            .toEqual({
                id: 'ABC',
                active: false,
                guesses: [],
                number: 44,
                winner: false,
                timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
            });
    });

    it('Should save a game', () => {
        const state = {
            id: 'ABC',
            active: true,
            guesses: [],
            number: 82,
            winner: false,
            timestamp: '2017-08-28T01:43:21.059Z'
        };
        const action = {
            type: C.SAVE_GAME,
            id: 'ABC',
            active: false,
            timestamp: '2017-08-28T01:43:21.059Z'
        };
        deepFreeze(state);
        deepFreeze(action);
        expect(game(state, action))
            .toEqual({
                id: 'ABC',
                active: false,
                guesses: [],
                number: 82,
                winner: false,
                timestamp: '2017-08-28T01:43:21.059Z'
            });
    });

    it('Should add a guess (didnt win)'), () => {
        const state = {
            id: 'ABC',
            active: true,
            guesses: [34],
            number: 82,
            winner: false,
            timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
        };
        const action = {
            type: C.ADD_GUESS,
            id: 'ABC',
            number: 82,
            guess: 44
        };
        deepFreeze(state);
        deepFreeze(action);
        expect(game(state, action))
            .toEqual({
                id: 'ABC',
                active: true,
                guesses: [34, 44],
                number: 82,
                winner: false,
                timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
            });
    };
    it('Should add a guess (won)'), () => {
        const state = {
            id: 'ABC',
            active: true,
            guesses: [34],
            number: 82,
            winner: false,
            timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
        };
        const action = {
            type: C.ADD_GUESS,
            id: 'ABC',
            number: 82,
            guess: 82
        };
        deepFreeze(state);
        deepFreeze(action);
        expect(game(state, action))
            .toEqual({
                id: 'ABC',
                active: true,
                guesses: [34, 82],
                number: 82,
                winner: true,
                timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
            });
    };
});