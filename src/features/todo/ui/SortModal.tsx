import { Modal, ModalProps } from "@shared/modal"
import { FC, FormEvent, useState } from "react";
import { TodoStatus } from "../enums";

interface Props extends ModalProps {
    onSort: (status: TodoStatus) => void;
    filterStatus?: TodoStatus;
}

export const SortModal: FC<Props> = ({ onSort, filterStatus = "", ...props }) => {
    const [sort, setSort] = useState<TodoStatus>(); 
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSort(sort as TodoStatus)
    }

    return (
        <Modal {...props}>
                <form onSubmit={handleSubmit}>
                    <div className="p-5 border-b border-gray-200">
                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Sort by status</label>
                        <select
                            id="status"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={sort as TodoStatus}
                            onChange={(e) => setSort(e.target.value as TodoStatus)}
                        >
                            <option value={""}>Choose sort type</option>
                            <option value={TodoStatus.Completed}>Completed first</option>
                            <option value={TodoStatus.InCompleted}>InCompleted first</option>
                        </select>
                    </div>

                    <div className="px-5 py-2 flex items-center justify-between">
                        <button 
                            onClick={props.onClose}
                            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none dark:focus:ring-blue-800"
                        >
                            OK
                        </button>
                    </div>
                </form>
        </Modal>
    )
}