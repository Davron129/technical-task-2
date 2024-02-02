import { FC } from "react";
import { FaFilter, FaSort, FaTrash } from "react-icons/fa"
import { TodoStatus } from "../enums";
import { IoMdClose } from "react-icons/io";

interface Props {
    onDelete: () => void;
    onFilter: () => void;
    onSort: () => void;
    filter: TodoStatus | "";
    sort: TodoStatus | "";
    clearFilter: () => void;
    clearSort: () => void;
}

export const FilterPanel: FC<Props> = ({
    onFilter,
    onDelete,
    filter,
    clearFilter,
    sort,
    onSort,
    clearSort
}) => {
    return (
        <div className="mb-5 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                {
                    filter && (
                        <span id="badge-dismiss-default" className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded">
                            {
                                filter === TodoStatus.Completed
                                    ? "Completed"
                                    : "InCompleted"
                            }
                            <button
                                type="button"
                                className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900"
                                onClick={clearFilter}
                            >
                                <IoMdClose />
                            </button>
                        </span>
                    )
                }
                {
                    sort && (
                        <span id="badge-dismiss-default" className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-green-800 bg-green-100 rounded">
                            {
                                sort === TodoStatus.Completed
                                    ? "Completed first"
                                    : "InCompleted first"
                            }
                            <button
                                type="button"
                                className="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900"
                                onClick={clearSort}
                            >
                                <IoMdClose />
                            </button>
                        </span>
                    )
                }
            </div>
            <div className="flex gap-3">
                <button 
                    className="flex gap-2 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto p-2.5 text-center"
                    title="Filter by status"
                    onClick={onFilter}
                >
                    <FaFilter />
                    <span>Filter</span>
                </button>
                <button 
                    className="flex gap-2 items-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto p-2.5 text-center"
                    title="Sort by status"   
                    onClick={onSort} 
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
        </div>
    )
}