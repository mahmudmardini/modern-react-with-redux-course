import Table from "./Table";
import {GoArrowSmallDown, GoArrowSmallUp} from "react-icons/go";
import useSort from "../hooks/useSort";


const getIcons = (label, sortBy, sortOrder) => {
    const bothArrows = <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
    </div>;

    if (label !== sortBy) {
        return bothArrows;
    }

    switch (sortOrder) {
        case 'asc':
            return <div><GoArrowSmallUp /></div>;
        case 'desc':
            return <div><GoArrowSmallDown /></div>;
        default:
            return bothArrows;
    }
}
function SortableTable (props) {
    const { config, data } = props;

    const {
        sortOrder,
        sortBy,
        sortedData,
        sortByColumn
    } = useSort(config, data);

    const updateConfig = config.map(column => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: ()=> <th className="cursor-pointer hover:bg-gray-100" onClick={() => sortByColumn(column.label)}>
                <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }
    })

    return <Table {...props} data={sortedData} config={updateConfig}>

    </Table>;
}
export default SortableTable;