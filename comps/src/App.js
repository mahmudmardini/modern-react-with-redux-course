import Dropdown from "./components/Dropdown.tsx";
import {useState} from "react";

function App() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option)
    };

    const options = [
        {
            label: 'Label 1',
            value: 'value_1',
        },
        {
            label: 'Label 2',
            value: 'value_2',
        },
        {
            label: 'Label 3',
            value: 'value_3',
        }
    ];

  return (
    <div>
        <Dropdown options={options} value={selection} onChange={handleSelect}/>
    </div>
  );
}

export default App;
