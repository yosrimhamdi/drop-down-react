import React from 'react';
import classnames from 'classnames';

import './Bellow.sass';

const Bellow = ({
  item: { id, question, answer },
  activeIndex,
  setActiveIndex,
}) => {
  const className = classnames({
    'bellow': true,
    'bellow--active': activeIndex === id,
  });

  return (
    <div className={className} onClick={() => setActiveIndex(id)}>
      <h2 className="bellow__question">{question}</h2>
      <div className="bellow__answer">{answer}</div>
    </div>
  );
};

export default Bellow;
