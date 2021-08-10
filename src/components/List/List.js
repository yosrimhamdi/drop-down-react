import React, { useState } from 'react';

import wikipedia from '@api/wikipedia';
import Searches from './Searches';
import Input from './Input';

const List = () => {
  const [searches, setSearches] = useState([]);

  const onFormSubmit = async term => {
    const response = await wikipedia.get('/', {
      params: {
        srsearch: term,
      },
    });

    setSearches(response.data.query.search);
  };

  console.log('will render List');

  return (
    <div>
      <Input onFormSubmit={onFormSubmit} />
      <Searches searches={searches} />
    </div>
  );
};

export default List;
