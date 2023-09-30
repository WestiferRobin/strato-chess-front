import axios from 'axios';

// const TEST_ENDPOINT = 'http://localhost:5154/test' // MAC
const TEST_ENDPOINT = 'https://localhost:7016/test' // wINDOWS

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
