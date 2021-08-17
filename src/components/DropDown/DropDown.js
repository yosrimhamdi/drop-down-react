import React, { useState } from 'react';

import Select from '@components/Select';
import options from './options';

const DropDown = () => {
  const [selection, setSelection] = useState(null);

  return (
    <div>
      <Select
        options={options}
        selection={selection}
        setSelection={setSelection}
        message="Select a color"
      />
    </div>
  );
};
export default DropDown;
