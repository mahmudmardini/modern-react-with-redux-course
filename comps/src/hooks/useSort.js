import {useState} from "react";


function useSort (config, data) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const sortByColumn = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        switch (sortOrder) {
            case null:
                setSortOrder('asc');
                setSortBy(label);
                break;
            case 'asc':
                setSortOrder('desc');
                setSortBy(label);
                break;
            case 'desc':
                setSortOrder(null);
                setSortBy(null);
                break;
            default:
                setSortOrder(null);
                setSortBy(null);
        }
    }

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        // make a copy of the data array
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        })
    }

    return {
        sortOrder,
        sortBy,
        sortedData,
        sort: sortByColumn
    }
}

export default useSort;