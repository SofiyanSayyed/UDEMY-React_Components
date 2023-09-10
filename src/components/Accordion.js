import { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go'

function Accordion({ items }) {
    const [ expandedIndex, setExpandedIndex ] = useState(3)

    const handleClick = (nextIndex) => {
        expandedIndex === nextIndex ? setExpandedIndex('') : setExpandedIndex(nextIndex)
    }

    const renderAccordion = items.map((value, index) => {
        let isExpanded = index === expandedIndex

        let icon = <span className='text-2xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>


        return <div key={value.id}>
            <div onClick={() => handleClick(index)} className={'bg-gray-50 flex items-center justify-between border border-gray-500 mb-2 p-3 cursor-pointer'}>
                {value.title}
                {icon}
            </div>
            {isExpanded && <p className={'border-b p-5'}>{value.content}</p>}
        </div>


    })

    return (
        <div>
            {renderAccordion}
        </div>

    )
}

export default Accordion