import React, { useState, useEffect } from 'react';

const Input = ({ onFormSubmit, searches }) => {
  const [term, setTerm] = useState('programming');

  useEffect(() => {
    if (term && !searches.length) {
      onFormSubmit(term);
    } else {
      const timerId = setTimeout(() => {
        if (term) {
          onFormSubmit(term);
        }
      }, 500);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [term, onFormSubmit]);

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
