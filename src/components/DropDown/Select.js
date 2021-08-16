import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const Select = ({ options, selection, setSelection }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const closeMenu = e => {
      if (!ref.current.contains(e.target) && open) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, [open]);

  const renderedOptions = options.map((option, i) => {
    if (selection && selection.value === option.value) {
      return null;
    }

    return (
      <div className="item" key={i} onClick={() => setSelection(option)}>
        {option.label}
      </div>
    );
  });

  const dropdown = classnames({
    'ui selection dropdown': true,
    'visible active': open,
  });

  const text = classnames({
    'text': true,
    'default': !selection,
  });

  const menu = classnames({
    'menu': true,
    'visible transition': open,
  });

  const defaultText = selection ? selection.label : 'Select Color';

  return (
    <div className={dropdown} ref={ref} onClick={() => setOpen(!open)}>
      <input type="hidden" name="gender" />
      <i className="dropdown icon"></i>
      <div className={text}>{defaultText}</div>
      <div className={menu}>{renderedOptions}</div>
    </div>
  );
};

export default Select;
