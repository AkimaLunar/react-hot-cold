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
        let state = 'test-start';
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
    it('Should create a new game (empty)', () => {
        let state = [];
        const { max } = initialState;
        state = games(state, newGame(max));
        expect(state).toHaveLength(1);
    });

    it('Should create a new game ', () => {
        const game = {
            id: '788b4d96-2245-4bac-a177-c0b80011975e',
            active: false,
            guesses: [],
            number: 82,
            winner: false,
            timestamp: 'Sat Aug 26 2017 15:46:57 GMT-0700 (Pacific Daylight Time)'
        };
        let state = [game];
        const { max } = initialState;
        state = games(state, newGame(max));
        expect(state).toHaveLength(2);
    });
});

describe('Game reducer', () => {
    it('Should create a new game', () => {
        let state = { };
        const { max } = initialState;
        state = game(state, newGame(max));
        const expectedState = {
            id: state.id,
            active: true,
            guesses: [],
            number: state.number,
            winner: false,
            timestamp: state.timestamp
        };
        expect(state).toMatchObject(expectedState);
        expect(state.active).toBe(true);
        expect(state.guesses).toEqual([]);
        expect(state.number).toBeLessThanOrEqual(max);
        expect(state.winner).toBe(false);
        expect(state.timestamp).toBeInstanceOf(Date);
    });

    it('Should save a game', () => {
        let state = {
            id: '788b4d96-2245-4bac-a177-c0b80011975e',
            active: true,
            guesses: [],
            number: 82,
            winner: false,
            timestamp: '2017-08-28T01:43:21.059Z'
        };
        state = game(state, saveGame('788b4d96-2245-4bac-a177-c0b80011975e'));
        const expectedState = {
            id: state.id,
            active: false,
            guesses: [],
            number: state.number,
            winner: false,
            timestamp: state.timestamp
        };
        expect(state).toMatchObject(expectedState);
        expect(state.active).toBe(false);
        expect(state.guesses).toEqual([]);
        expect(state.winner).toBe(false);
        expect(state.timestamp).toBeInstanceOf(Date);
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
        const expectedState = {
            id: state.id,
            active: false,
            guesses: [44,45],
            number: state.number,
            winner: false,
            timestamp: state.timestamp
        };
        expect(state).toMatchObject(expectedState);
        expect(state.id).toBe('788b4d96-2245-4bac-a177-c0b80011975e');
        expect(state.active).toBe(true);
        expect(state.guesses).toEqual([44,45]);
        expect(state.number).toBeLessThanOrEqual(max);
        expect(state.winner).toBe(false);
        expect(state.timestamp).toBeInstanceOf(Date);
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
        const expectedState = {
            id: state.id,
            active: false,
            guesses: [44,82],
            number: state.number,
            winner: true,
            timestamp: state.timestamp
        };
        expect(state).toMatchObject(expectedState);
        expect(state.id).toBe('788b4d96-2245-4bac-a177-c0b80011975e');
        expect(state.active).toBe(true);
        expect(state.guesses).toEqual([44,82]);
        expect(state.number).toBeLessThanOrEqual(max);
        expect(state.winner).toBe(true);
        expect(state.timestamp).toBeInstanceOf(Date);
    };
});