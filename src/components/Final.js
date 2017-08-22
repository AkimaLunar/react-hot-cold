import React from "react";
import "./Final.css";
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

Final.displayName = "Final";
export default Final;
