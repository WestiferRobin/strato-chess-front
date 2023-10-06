import { useEffect, useState } from 'react';
import { fetchTest } from '../apis/test-api';

const useTest = () => {
  const [opponentName, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchName() {
      try {
        const name = await fetchTest();
        setTest(`${name.name}`);
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
