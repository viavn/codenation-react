import React from 'react';
import { useAvailability } from './availabity-hook';

export default () => {
  const isOnline = useAvailability();

  return (
    <div>
      <h1>
        This is <strong>Custom Hook page</strong>
      </h1>
      <h3>Status: {isOnline}</h3>
    </div>
  );
};
