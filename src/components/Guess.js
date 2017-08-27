import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Guess.css';

class Guess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onGuess(
            this.props.game.id,
            this.props.game.number,
            parseInt(this.state.value, 10)
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="guess">Guess a number:</label>
                <input
                    ref={input => input && input.focus()}
                    type="number"
                    id="guess"
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.handleChange}
                />
                <button type="submit">Guess</button>
                <p className="guess__helper">You need at least two guesses to start…</p>
            </form>
        );
    }
}

Guess.PropTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    game: PropTypes.object,
    onGuess: PropTypes.func
};
Guess.displayName = 'Guess';
export default Guess;
