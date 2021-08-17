import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const Select = ({ options, selection, setSelection, message }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (!ref.current.contains(e.target) && open) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', onBodyClick);

    return () => document.body.removeEventListener('click', onBodyClick);
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

  const dropDownClass = classnames({
    'ui selection dropdown': true,
    'visible active': open,
  });

  const menuClass = classnames({
    'menu': true,
    'visible transition': open,
  });

  const placeholderClass = classnames({
    'text': true,
    'default': !selection,
  });

  const placeholderContent = selection ? selection.label : message;

  return (
    <div>
      <h4>{message}</h4>
      <div className={dropDownClass} ref={ref} onClick={() => setOpen(!open)}>
        <input type="hidden" name="gender" />
        <i className="dropdown icon"></i>
        <div className={placeholderClass}>{placeholderContent}</div>
        <div className={menuClass}>{renderedOptions}</div>
      </div>
    </div>
  );
};

export default Select;
