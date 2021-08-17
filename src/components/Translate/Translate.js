import React, { useState } from 'react';

import Select from '../Select';
import Convert from './Convert';
import options from './options';

const Translate = () => {
  const [language, setLanguage] = useState({});
  const [phrase, setPhrase] = useState('');

  return (
    <div>
      <h4>Enter Text</h4>
      <input
        type="text"
        value={phrase}
        onChange={e => setPhrase(e.target.value)}
      />
      <Select
        selection={language}
        setSelection={setLanguage}
        options={options}
        message="Select a language"
      />
      <Convert language={language.value} phrase={phrase} />
    </div>
  );
};

export default Translate;
