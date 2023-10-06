import axios from 'axios';
import { STRATO_CHESS_BACKEND } from '../constants';

const BOARD_ENDPOINT = `${STRATO_CHESS_BACKEND}/board`

// Simulate fetching the opponent's name from the API
export const getBoard = async () => {
  try {
    const response = await axios.get(BOARD_ENDPOINT);
    return response.data; // Assuming the response contains the opponent's name
  } catch (error) {
    console.log(error);
    throw error;
  }
};
