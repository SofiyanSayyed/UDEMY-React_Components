import { useState } from 'react';
import Dropdown from '../components/Dropdown'

function DropdownPage() {
  const [ selection, setSelection ] = useState(null)

  let options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" }
  ]

  const handleSelect = (option) => {
    setSelection(option)
  };

  return (
    <div className='flex '>
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={selection} />
    </div>

  );
}

export default DropdownPage;
