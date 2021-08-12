import React, { useState, useEffect, useRef } from 'react';

const Input = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('programming');
  const ref = useRef({});

  useEffect(() => {
    const { timer } = ref.current;

    if (timer) {
      clearTimeout(timer);
    }

    ref.current.timer = setTimeout(() => {
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
