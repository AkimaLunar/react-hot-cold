import React from 'react';
import './Reaction.css'

const Reaction = ({ distance, reactions, reactionType }) => {

    // TODO: Refactor
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
    )
}

Reaction.displayName = 'Reaction';

export default Reaction;