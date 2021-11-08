import React, {useEffect, useRef, useState} from 'react';

const Dropdown = ({ options, selected, onSelectedChanges }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();


  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);


  const renderedOptions = options.map((option) => {
    if (option === selected) {
      return null;
    }

    return (
      <div
        key={option.value}
        className={'item'}
        onClick={() => onSelectedChanges(option)}
      >
        {option.label}
      </div>
    );
  });


  return (
    <div ref={ref} className={'ui form'}>
      <div className={'field'}>
        <label className={'label'}>Select a Color</label>
        <div
          onClick={(e) => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className={'dropdown icon'} />
          <div className={'text'}>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;