import React from 'react';

const Board = ({ squares, onClick }) => (
    <div className="grid grid-cols-3 gap-4 mb-4">
        {[0, 1, 2].map(row => (
            <div key={row} className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map(col => {
                    const index = row * 3 + col;
                    return (
                        <button
                            key={index}
                            className="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 transition-colors duration-300 ease-in-out w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-2xl md:text-3xl lg:text-4xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => onClick(index)}
                            disabled={squares[index] !== null}
                        >
                            {squares[index]}
                        </button>
                    );
                })}
            </div>
        ))}
    </div>
);

export default Board;
