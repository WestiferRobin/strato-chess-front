
import { useEffect, useState } from 'react';
import { getBoard } from '../apis/board-api';

const useBoard = () => {
    const [board, setBoard] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        fetchBoard();
    }, []);

    return { board, isLoading, error };
};

export default useBoard;
