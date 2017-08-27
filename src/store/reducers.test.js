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
        let state = 'test start';
        state = username(state, setUsername('test-mid'));
        state = username(state, setUsername('test-result'));
        expect(state).toEqual('test-result');
    });
});

describe('Min reducer', () => {
    it('Should set min', () => {
        let state = 20;
        state = min(state, setMin(10));
        state = min(state, setMin(0));
        expect(state).toEqual(0);
    });
});
describe('Max reducer', () => {
    it('Should set max', () => {
        let state = 30;
        state = max(state, setMax(10));
        state = max(state, setMax(100));
        expect(state).toEqual(100);
    });
});

describe('Games reducer', () => {
    it('Should create a new game', () => {
        let state = [];
        const { max } = initialState;
        state = games(state, newGame(max));
        expect(state).toHaveLength(1);
    });
});

describe('Game reducer', () => {
    it('Should create a new game', () => {
        let state = { };
        const { max } = initialState;
        state = game(state, newGame(max));
        expect(state).toHaveProperty('id');
        expect(state).toHaveProperty('active',true);
        expect(state).toHaveProperty('guesses', []);
        expect(state).toHaveProperty('number');
        expect(state).toHaveProperty('timestamp');
        expect(state).toHaveProperty('winner', false);
    });

    it('Should save a game', () => {
        let state = {
            id: '788b4d96-2245-4bac-a177-c0b80011975e',
            active: true,
            guesses: [],
            number: 82,
            winner: false,
            timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
        };
        state = game(state, saveGame('788b4d96-2245-4bac-a177-c0b80011975e'));
        expect(state).toHaveProperty('id', '788b4d96-2245-4bac-a177-c0b80011975e');
        expect(state).toHaveProperty('active', false);
        expect(state).toHaveProperty('guesses', []);
        expect(state).toHaveProperty('number', 82);
        expect(state).toHaveProperty('timestamp');
        expect(state).toHaveProperty('winner');
    });

    it('Should add a guess (didnt win)'), () => {
        let state = {
            id: '788b4d96-2245-4bac-a177-c0b80011975e',
            active: true,
            guesses: [],
            number: 82,
            winner: false,
            timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
        };
        state = game(state, addGuess(
            '788b4d96-2245-4bac-a177-c0b80011975e',
            82,
            44
        ));
        state = game(state, addGuess(
            '788b4d96-2245-4bac-a177-c0b80011975e',
            82,
            45
        ));
        expect(state).toHaveProperty('id', '788b4d96-2245-4bac-a177-c0b80011975e');
        expect(state).toHaveProperty('active', true);
        expect(state).toHaveProperty('guesses', [44, 45]);
        expect(state).toHaveProperty('number', 82);
        expect(state).toHaveProperty('timestamp');
        expect(state).toHaveProperty('winner', false);
    };
    it('Should add a guess (won)'), () => {
        let state = {
            id: '788b4d96-2245-4bac-a177-c0b80011975e',
            active: true,
            guesses: [],
            number: 82,
            winner: false,
            timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
        };
        state = game(state, addGuess(
            '788b4d96-2245-4bac-a177-c0b80011975e',
            82,
            44
        ));
        state = game(state, addGuess(
            '788b4d96-2245-4bac-a177-c0b80011975e',
            82,
            82
        ));
        expect(state).toHaveProperty('id', '788b4d96-2245-4bac-a177-c0b80011975e');
        expect(state).toHaveProperty('active', true);
        expect(state).toHaveProperty('guesses', [44, 82]);
        expect(state).toHaveProperty('number', 82);
        expect(state).toHaveProperty('timestamp');
        expect(state).toHaveProperty('winner', true);
    };
});