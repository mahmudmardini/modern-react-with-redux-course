import {useEffect, useRef, useState} from "react";
import {GoChevronDown, GoChevronUp} from "react-icons/go";
// @ts-ignore
import Panel from "./Panel.tsx"

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
    const dropdownEl = useRef<any>();

    const optionItems = props.options.map( option => {
            return <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
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

    useEffect(() => {
        const handler = (event: Event) => {
            if (!dropdownEl.current) {
                return;
            }

            if (!dropdownEl.current.contains(event.target)) {
                setIsListOpen(false);
            }
        };

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, [])

    return (
        <div ref={dropdownEl} className="w-48 relative">
            <div
                className="flex justify-between items-center cursor-pointer border p-3 shadow-5 bg-white w-full"
                 onClick={toggleList}
            >
                {props.value?.label || 'Select...'}
                {
                    !isListOpen
                        ? <GoChevronDown className="text-lg"/>
                        : <GoChevronUp className="text-lg"/>
                }
            </div>
            { isListOpen &&
                <Panel className="absolute top-full rounded">
                    {optionItems}
                </Panel>
        }
        </div>
    );
}

export default Dropdown;
