import React from 'react';
import PropTypes from 'prop-types';

import './Reaction.css';

const Reaction = ({ distance, max, reactions, reactionType }) => {
    // TODO: Refactor
    // const reactionsIterable = [ ...Array(reactions.length).keys() ];
    // const step = max / reactions.length;

    
    const assignReaction = (distance) => {
        if (distance<25) {
            return reactions[3];
        } else if (distance<50) {
            return reactions[2];
        } else if (distance<75) {
            return reactions[1];
        }else {
            return reactions[0];
        }
    };
    const reaction = <img src={assignReaction(distance)} alt={reactionType}/>;


    return (
        <section className="reaction">
            {reaction}
        </section>
    );
};

Reaction.PropTypes = {
    distance: PropTypes.number,
    max: PropTypes.number,
    reactions: PropTypes.array,
    reactionType: PropTypes.oneOf['hot', 'cold']
};
Reaction.displayName = 'Reaction';

export default Reaction;