import React, { useRef } from 'react';
import classnames from 'classnames';

const Select = ({ options, selection, setSelection }) => {
  const menu = useRef(null);

  const onSelectClick = () => {
    menu.current.classList.toggle('visible');
  };

  const onOptionClick = e => {
    setSelection(options[e.target.dataset.index]);
  };

  const renderedOptions = options.map(({ value, label }, i) => (
    <div
      className="item"
      key={i}
      data-value={value}
      data-index={i}
      onClick={onOptionClick}
    >
      {label}
    </div>
  ));

  const className = classnames({
    'text': true,
    'default': !selection,
  });

  return (
    <div className="ui selection dropdown" onClick={onSelectClick}>
      <input type="hidden" name="gender" />
      <i className="dropdown icon"></i>
      <div className={className}>
        {selection ? selection.label : 'Select Color'}
      </div>
      <div className="menu transition" ref={menu}>
        {renderedOptions}
      </div>
    </div>
  );
};

export default Select;
