import React, { useState, useEffect } from 'react';

const Input = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('UseEffect run');
    if (term) {
      onFormSubmit(term);
    }
    //need to add some sort of timer here.
    // warning onFormSubmit is missed in the deps array??!!!
  }, [term]);

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
