import { fetchStatus } from '../../api/GameApi';
import { useEffect, useState } from 'react';

function ApiStatus() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const getStatus = async () => {
      try {
        const statusCode = await fetchStatus();
        setStatus(statusCode);
      } catch (error) {
        setError('Failed to fetch status');
      }
    };

    getStatus();
  }, []);

  return( 
    <div>
      <p>
        Api status: {status}
      </p>
    </div>
  );
}

export default ApiStatus;