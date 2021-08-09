import React from 'react';

import Accordion from './components/Accordion';
import items from './items';

const App = () => (
  <div>
    <Accordion items={items} />
  </div>
);

export default App;
