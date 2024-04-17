import React, { useState } from 'react';
import Board from './components/Board';
import Status from './components/Status';
import Scoreboard from './components/Scoreboard';

const App = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [scores, setScores] = useState({ X: 0, O: 0 });

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
    };

    const handleClick = (index) => {
        if (winner || board[index]) return;
        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        checkWinner(newBoard);
    };

    const checkWinner = (board) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                setScores(prevScores => ({
                    ...prevScores,
                    [board[a]]: prevScores[board[a]] + 1,
                }));
                return;
            }
        }
        if (!board.includes(null)) {
            setWinner('Draw');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Tic Tac Toe</h1>
            <Status currentPlayer={xIsNext ? 'X' : 'O'} winner={winner} onReset={resetGame} />
            <Board squares={board} onClick={handleClick} />
            <Scoreboard scores={scores} />
        </div>
    );
};

export default App;
