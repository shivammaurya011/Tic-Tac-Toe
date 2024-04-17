import React from 'react';

const Status = ({ currentPlayer, winner, onReset }) => (
    <div className="text-xl mb-4">
        {winner ? (
            <div>
                Winner: {winner}
                <button onClick={onReset} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md">
                    New Game
                </button>
            </div>
        ) : (
            <div>
                Current Player: {currentPlayer}
            </div>
        )}
    </div>
);

export default Status;
