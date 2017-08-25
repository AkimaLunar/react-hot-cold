import { 
    setUsername,
    setMin,
    setMax,
    newGame,
    saveGame,
    addGuess
} from './actions';
import C from './constants';

describe('setUsername', () => {
    it('Should return the action', () => {
        const name = 'Username';
        const action = setUsername(name);
        expect(action.type).toEqual('SET_USERNAME');
        expect(action.username).toEqual(name);
    });
});
describe('setMin', () => {
    it('Should return the action', () => {
        const min = 0;
        const action = setMin(min);
        expect(action.type).toEqual('SET_MIN');
        expect(action.min).toEqual(min);
    });
});

describe('setMax', () => {
    it('Should return the action', () => {
        const max = 100;
        const action = setMax(max);
        expect(action.type).toEqual('SET_MAX');
        expect(action.max).toEqual(max);
    });
});

describe('newGame', () => {
    it('Should return the action', () => {
        const max = 100;
        const action = newGame(max);
        expect(action.type).toEqual('NEW_GAME');
        expect(action.active).toEqual(true);
    });
});

describe('saveGame', () => {
    it('Should return the action', () => {
        const id = 'ABC';
        const action = saveGame(id);
        expect(action.type).toEqual('SAVE_GAME');
        expect(action.id).toEqual(id);
        expect(action.active).toEqual(false);
    });
});

describe('addGuess', () => {
    it('Should return the action with false', () => {
        const id = 'ABC';
        const guess = 43;
        const number = 44;
        const action = addGuess(id, number, guess);
        expect(action.type).toEqual('ADD_GUESS');
        expect(action.guess).toEqual(guess);
        expect(action.winner).toEqual(false);
    });

    it('Should return the action with true', () => {
        const id = 'ABC';
        const guess = 44;
        const number = 44;
        const action = addGuess(id, number, guess);
        expect(action.type).toEqual('ADD_GUESS');
        expect(action.guess).toEqual(guess);
        expect(action.winner).toEqual(true);
    });
});