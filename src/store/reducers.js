import C from './constants';

export const username = (state = 'Anonymous Gamer', action) => {
    switch (action.type) {
    case C.SET_USERNAME:
        return action.username;
    default:
        return state;
    }
};

export const min = (state = 0, action) => {
    switch (action.type) {
    case C.SET_MIN:
        return action.min;
    default:
        return state;
    }
};

export const max = (state = 100, action) => {
    switch (action.type) {
    case C.SET_MAX:
        return action.max;
    default:
        return state;
    }
};

export const game = (state = {}, action) => {
    switch (action.type) {
    case C.NEW_GAME:
        return {
            id: action.id,
            active: action.active,
            guesses: action.guesses,
            number: action.number,
            winner: action.winner,
            timestamp: action.timestamp
        };
    case C.ADD_GUESS:
        return state.id !== action.id
        ? state
        : {
            ...state, 
            guesses: [...state.guesses, action.guess],
            winner: action.winner
        };
    case C.SAVE_GAME:
        return state.id !== action.id
        ? state
        : {
            ...state,
            active: action.active,
            timestamp: action.timestamp
        };
    default:
        return state;
    }
};

export const games = (state = [], action) => {
    switch (action.type) {
    case C.NEW_GAME:
        return [...state, game({}, action)];
    case C.ADD_GUESS:
        return state.map(g => game(g, action));
    case C.SAVE_GAME:
        return state.map(g => game(g, action));
    default:
        return state;
    }
};
