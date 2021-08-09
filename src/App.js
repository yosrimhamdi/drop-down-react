import React from 'react';

import Accordion from './Accordion';
import items from './items';

const App = () => (
  <div>
    <Accordion items={items} />
  </div>
);

export default App;
