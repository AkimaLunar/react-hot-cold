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

// describe('addCard', () => {
//     it('Should return the action', () => {
//         const text = 'Card text';
//         const listIndex = 10;
//         const action = addCard(text, listIndex);
//         expect(action.type).toEqual(ADD_CARD);
//         expect(action.text).toEqual(text);
//         expect(action.listIndex).toEqual(listIndex);
//     });
// });

// describe('fetchBoardSuccess', () => {
//     it('Should return the action', () => {
//         const board = {
//             lists: []
//         };
//         const action = fetchBoardSuccess(board);
//         expect(action.type).toEqual(FETCH_BOARD_SUCCESS);
//         expect(action.board).toEqual(board);
//     });
// });