import React from 'react';

const Convert = ({ language, phrase }) => {
  return (
    <div>
      <h4>Output</h4>
      <div>{language}</div>
      <div>{phrase}</div>
    </div>
  );
};

export default Convert;
