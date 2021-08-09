import React, { useState } from 'react';

import Bellow from './Bellow';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const renderedBellows = items.map(item => (
    <Bellow
      key={item.id}
      item={item}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  ));

  console.log('will rerender');

  return <div>{renderedBellows}</div>;
};

export default Accordion;
