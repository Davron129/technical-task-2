import { Modal, ModalProps } from "@shared/modal"
import { FC, FormEvent, useState } from "react";
import { TodoStatus } from "../enums";

interface Props extends ModalProps {
    onFilter: (status: TodoStatus) => void;
    filterStatus?: TodoStatus;
}

export const FilterModal: FC<Props> = ({ onFilter, filterStatus = "", ...props }) => {
    const [status, setStatus] = useState<TodoStatus>(); 
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onFilter(status as TodoStatus)
    }

    return (
        <Modal {...props}>
                <form onSubmit={handleSubmit}>
                    <div className="p-5 border-b border-gray-200">
                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Filter by status</label>
                        <select
                            id="status"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={status as TodoStatus}
                            onChange={(e) => setStatus(e.target.value as TodoStatus)}
                        >
                            <option value={""}>Choose status</option>
                            <option value={TodoStatus.Completed}>Completed</option>
                            <option value={TodoStatus.InCompleted}>InCompleted</option>
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