import React from 'react';

import Bellow from './Bellow';

const Accordion = ({ items }) => {
  const renderedBellows = items.map(item => (
    <Bellow key={item.id} item={item} />
  ));

  return <div>{renderedBellows}</div>;
};

export default Accordion;
