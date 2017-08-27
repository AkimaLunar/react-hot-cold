import React from 'react';
import PropTypes from 'prop-types';
import './Final.css';
const Final = ({ game, onReset }) => {
    return (
        <header>
            <h1>
                {game.number}
            </h1>
            <h2>You Won!</h2>
            <button onClick={() => onReset(game.id)}>Play again!</button>
        </header>
    );
};


Final.propTypes = {
    game: PropTypes.object,
    onReset: PropTypes.func
};
Final.displayName = 'Final';
export default Final;
