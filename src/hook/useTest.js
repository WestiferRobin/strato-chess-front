// hooks/useTest.js
import { useEffect, useState } from 'react';
import { fetchTest } from '../api/test-api';

const useTest = () => {
  const [opponentName, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchName() {
      try {
        const name = await fetchTest();
        setTest(name);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchName();
  }, []);

  return { opponentName, loading, error };
};

export default useTest;
