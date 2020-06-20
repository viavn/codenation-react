import React from 'react';
import { useSelector } from 'react-redux';

function myPersonalSelector(state) {
  return state.homeWithRedux.data;
}

const ItemsList = () => {
  const items = useSelector(myPersonalSelector);

  return (
    <ul>
      {items.map((each) => (
        <li key={each.id}>{each.title}</li>
      ))}
    </ul>
  );
};

export default ItemsList;
