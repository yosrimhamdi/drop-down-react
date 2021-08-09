import React, { useState } from 'react';
import classnames from 'classnames';

import './Bellow.sass';

const Bellow = ({ item: { question, answer } }) => {
  const [active, setActive] = useState(false);

  const className = classnames({
    'bellow': true,
    'bellow--active': active,
  });

  return (
    <div className={className} onClick={() => setActive(!active)}>
      <h2 className="bellow__question">{question}</h2>
      <div className="bellow__answer">{answer}</div>
    </div>
  );
};

export default Bellow;
