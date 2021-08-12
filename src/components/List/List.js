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

    setSearches(response.data.query.search);
  }, []);

  return (
    <div>
      <Input onFormSubmit={onFormSubmit} />
      <Searches searches={searches} />
    </div>
  );
};

export default List;
