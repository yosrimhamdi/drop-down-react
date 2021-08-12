import React, { useState, useEffect, useRef } from 'react';

const Input = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('programming');
  const timer = usetimer(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
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
