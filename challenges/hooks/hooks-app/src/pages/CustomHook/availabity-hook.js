import { useState, useEffect } from 'react';
import api from './fake-api';

// custom hook
export function useAvailability() {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleAvailability(status) {
      setIsOnline(status);
    }

    api.subscribe(handleAvailability);

    return () => {
      // componentWillUnmount
      api.unsubscribe(handleAvailability);
    };
  }, []);

  if (isOnline === null) {
    return 'loading...';
  }

  return isOnline ? 'Online' : 'Offline';
}
