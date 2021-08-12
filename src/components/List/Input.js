import React, { useState, useEffect, useRef } from 'react';

const Input = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('programming');
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }

    ref.current = setTimeout(() => {
      if (term) {
        onFormSubmit(term);
      }
    }, 500);
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
