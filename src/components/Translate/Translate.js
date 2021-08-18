import React, { useState } from 'react';

import Input from './Input';
import Select from '../Select';
import Convert from './Convert';
import options from './options';

const Translate = () => {
  const [language, setLanguage] = useState({});
  const [phrase, setPhrase] = useState('');

  return (
    <div>
      <Input term={phrase} setTerm={setPhrase} />
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
