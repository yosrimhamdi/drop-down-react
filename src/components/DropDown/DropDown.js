import React, { useState } from 'react';

import Select from './Select';
import options from './options';

const DropDown = () => {
  const [selection, setSelection] = useState(null);

  return (
    <div>
      <Select
        options={options}
        selection={selection}
        setSelection={setSelection}
      />
    </div>
  );
};
export default DropDown;
