import React, { useState } from 'react';

const Input = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    if (term) {
      onFormSubmit(term);
    }
  };

  console.log('wil render Input');

  return (
    <form onSubmit={handleFormSubmit}>
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
