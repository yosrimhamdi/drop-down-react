import React, { useState } from 'react';

import Bellow from './Bellow';
import items from './items';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const renderedBellows = items.map(item => (
    <Bellow
      key={item.id}
      item={item}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  ));

  return <div>{renderedBellows}</div>;
};

export default Accordion;
