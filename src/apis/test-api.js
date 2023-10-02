import axios from 'axios';

const TEST_ENDPOINT = 'http://localhost:5154/players/1';

// Simulate fetching the opponent's name from the API
export const fetchTest = async () => {
  try {
    const response = await axios.get(TEST_ENDPOINT);
    return response.data; // Assuming the response contains the opponent's name
  } catch (error) {
    console.log(error);
    throw error;
  }
};
