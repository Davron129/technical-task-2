import { FC } from "react";
import { FaFilter, FaSort, FaTrash } from "react-icons/fa"

interface Props {
    onDelete: () => void;
    // onFilter: () => void;
    // onSort: () => void;
}

export const FilterPanel: FC<Props> = ({
    onDelete
}) => {
    return (
        <div className="mb-5 flex gap-3 justify-end">
            <button 
                className="flex gap-2 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto p-2.5 text-center"
                title="Filter by status"
            >
                <FaFilter />
                <span>Filter</span>
            </button>
            <button 
                className="flex gap-2 items-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto p-2.5 text-center"
                title="Sort by status"    
            >
                <FaSort />
                <span>Sort</span>
            </button>
            <button 
                className="flex gap-2 items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto p-2.5 text-center"
                title="Delete all"  
                onClick={onDelete}  
            >
                <FaTrash />
                <span>Delete all</span>
            </button>
        </div>
    )
}