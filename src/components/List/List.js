import React, { useState, useCallback } from 'react';

import wikipedia from '@api/wikipedia';
import Searches from './Searches';
import Input from './Input';

const List = () => {
  const [searches, setSearches] = useState([]);

  const onFormSubmit = useCallback(async term => {
    const response = await wikipedia.get('/', {
      params: {
        srsearch: term,
      },
    });

    console.log(response);

    setSearches(response.data.query.search);
  }, []);

  console.log('will render List');

  return (
    <div>
      <Input onFormSubmit={onFormSubmit} />
      <Searches searches={searches} />
    </div>
  );
};

export default List;
