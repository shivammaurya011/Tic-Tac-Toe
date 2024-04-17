import React from 'react';

const Scoreboard = ({ scores }) => (
    <div className="text-xl">
        <div>Scoreboard:</div>
        <div>X: {scores.X}</div>
        <div>O: {scores.O}</div>
    </div>
);

export default Scoreboard;
