import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>

      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChanges={setSelected}
          options={options}
        />
        : null
      }

      <h3
        style={{color: selected.value}}>
        {`This text is ${selected.value}`}
      </h3>

    </div>
  );
};

export default App;
