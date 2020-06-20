import React from 'react';
import { useParams } from 'react-router-dom';

import ItemsList from './ItemsList';

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Details Id: {id}</h1>
      <ItemsList />
    </div>
  );
};

export default Details;
