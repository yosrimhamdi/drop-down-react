import React, { useState, useEffect, useRef } from 'react';

const Input = ({ onFormSubmit, searches }) => {
  const [term, setTerm] = useState('programming');
  const prevTerm = useRef(term);

  useEffect(() => {
    if (term && !searches.length) {
      onFormSubmit(term);
    } else {
      const timerId = setTimeout(() => {
        if (term && prevTerm.current !== term) {
          onFormSubmit(term);
        }
      }, 500);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [term, onFormSubmit, searches.length]);

  const onInputChange = e => {
    prevTerm.current = term;

    setTerm(e.target.value);
  };

  return (
    <form>
      <input
        value={term}
        type="text"
        placeholder="Seach wikipedia"
        onChange={onInputChange}
      />
    </form>
  );
};

export default Input;
