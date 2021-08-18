import React, { useEffect, useState } from 'react';

import googleTranslate from '@api/googleTranslate';

const Convert = ({ language, phrase }) => {
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    if (!phrase || !language) {
      return;
    }

    const timeoutId = setTimeout(async () => {
      const { data } = await googleTranslate.post(
        '/',
        {},
        {
          params: {
            q: phrase,
            target: language.value,
          },
        },
      );

      setTranslation(data.data.translations[0].translatedText);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [phrase, language]);

  return (
    <div>
      <h4>Output</h4>
      <div>{translation}</div>
    </div>
  );
};

export default Convert;
