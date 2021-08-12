import React, { useState, useEffect } from 'react';

const Input = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('programming');

  useEffect(() => {
    console.log('UseEffect run');

    if (term) {
      onFormSubmit(term);
    }
  }, [term, onFormSubmit]);

  console.log('wil render Input');

  return (
    <form>
      <input
        value={term}
        type="text"
        placeholder="Seach wikipedia"
        onChange={e => setTerm(e.target.value)}
      />
    </form>
  );
};

export default Input;
