import React from 'react';

import Bellow from './Bellow';

const Accordion = ({ items }) => {
  const renderedItems = items.map(item => <Bellow item={item} />);

  return <div>{renderedItems}</div>;
};

export default Accordion;
