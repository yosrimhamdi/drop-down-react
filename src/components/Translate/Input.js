import React from 'react';

const Input = ({ term, setTerm }) => {
  return (
    <div>
      <h4>Enter Text</h4>
      <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
    </div>
  );
};

export default Input;
