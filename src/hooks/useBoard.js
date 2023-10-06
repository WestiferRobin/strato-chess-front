
import { useState } from 'react';
import { getBoard } from '../apis/board-api';

const initBoard = [
    [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
    [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ]
]

const useBoard = () => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [board, setBoard] = useState(initBoard);
    console.log(board);

    const fetchBoard = async () => {
        try {
            var data = await getBoard();
            setBoard(data.board);   
        } catch (error) {
            setError(error);    
        } finally {
            setLoading(false);
        }
    }

    return { board, setBoard, fetchBoard, isLoading, error };
};

export default useBoard;
