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
    })
})

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
    })

    it('Should save a game', () => {
        const id = 'ABC';
        let state = {

        };
        state = game(state, saveGame(id));
        expect(state).toEqual({

        })
    })

    it('Should add a guess', () => {
        const id = 'ABC';
        const number = 44;
        const guess = 43;
        let state = {

        }
        state = game(state, addGuess(id, number, guess));
        expect(state).toEqual({

        })
    })
})