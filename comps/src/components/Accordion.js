import {useState} from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";


function Accordion ({ items }) {

    const [expandedItemIndex, setExpandedItemIndex] = useState(-1);
    const expandItem = (targetIndex) => {
        const isExpanded = (targetIndex === expandedItemIndex);

        setExpandedItemIndex(
            !isExpanded
                ? targetIndex
                : -1
        );
    }

    const returnedItems = items.map((item, index) => {
        const isExpanded = expandedItemIndex === index;

        const arrowIcon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return (
            <div key={item.id} className="item" onClick={() => expandItem(index)}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
                    {item.label}
                    {arrowIcon}
                </div>
                { isExpanded &&
                    <div className="border-b p-5">
                        {item.content}
                    </div>
                }
            </div>
        );
    });

    return (
        <div className="border-x border-t rounded">
            {returnedItems}
        </div>
    );
}

export default Accordion;
