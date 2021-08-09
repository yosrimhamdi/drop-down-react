import React from 'react';

const Bellow = ({ item: { question, answer } }) => (
  <div>
    <div>{question}</div>
    <div>{answer}</div>
  </div>
);

export default Bellow;
