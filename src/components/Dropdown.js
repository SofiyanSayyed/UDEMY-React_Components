import { useState, useEffect, useRef } from "react";
import {GoChevronDown} from 'react-icons/go'
import Panel from './Panel'

function Dropdown({ options, onChange, value }) {
    const [ isOpen, setIsOpen ] = useState(false);
    let divEl = useRef()

    useEffect(()=>{
        const handler = (event) => {
            if(!divEl.current){
                return
            }

            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler)
        }
    },[])

    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(!isOpen);
    }

    let renderOptions = options.map((option, index) => {
        return <div className="hover:bg-sky-100 p-1 cursor-pointer rounded" key={index} onClick={() => handleOptionClick(option)}>{option.label}</div>
    })

    const handleSelectClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleSelectClick}>
                {value?.label || "Select..."}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen &&
                <Panel className="absolute top-full">
                    {renderOptions}
                </Panel>}
        </div>
    );
}

export default Dropdown;
