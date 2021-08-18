import React, { useEffect } from 'react';

import googleTranslate from '@api/googleTranslate';

const Convert = ({ language, phrase }) => {
  useEffect(() => {
    // googleTranslate.get();
  }, [phrase, language]);

  return (
    <div>
      <h4>Output</h4>
      <div>{language}</div>
      <div>{phrase}</div>
    </div>
  );
};

export default Convert;
