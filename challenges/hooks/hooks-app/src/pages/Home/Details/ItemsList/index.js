import React, { useContext } from 'react';

import { HomeContext } from '../..';

const ItemsList = () => {
  const items = useContext(HomeContext);

  return (
    <ul>
      {items.map((each) => (
        <li key={each.id}>{each.title}</li>
      ))}
    </ul>

    // with Render Props
    // <HomeContext.Consumer>
    //   {(items) => (
    //     <ul>
    //       {items.map((each) => (
    //         <li key={each.id}>{each.title}</li>
    //       ))}
    //     </ul>
    //   )}
    // </HomeContext.Consumer>
  );
};

export default ItemsList;
