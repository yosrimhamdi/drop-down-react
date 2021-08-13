import React, { useState, useEffect, useRef } from 'react';

const Input = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('programming');

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (term) {
        onFormSubmit(term);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
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
