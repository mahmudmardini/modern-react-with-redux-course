import {useState} from "react";

interface PropsTypes {
    options: Option[];
    value: Option;
    onChange: (option: Option) => void;
}

interface Option {
    label: string;
    value: string
}

function Dropdown(props : PropsTypes) {
    const [isListOpen, setIsListOpen] = useState<boolean>(false);

    const optionItems = props.options.map( option => {
            return <div
                className="cursor-pointer"
                key={option.value}
                onClick={() => selectOption(option)}
            >
                {option.label}
            </div>
        });

    const toggleList = () => {
        setIsListOpen((currentIsListOpen) => !currentIsListOpen);
    };

    const selectOption = (option: Option) => {
        props.onChange(option);
        setIsListOpen(false);
    };

    return (
        <div>
            <div onClick={toggleList} className="cursor-pointer">
                {props.value?.label || 'Select...'}
            </div>
            { isListOpen &&
            <div className="list">
                {optionItems}
            </div>
        }
        </div>
    );
}

export default Dropdown;
