import { FC } from "react"
import { ITask } from "../types"

interface Props {
    tasks: ITask[];
    onEdit: (value: ITask) => void;
    onDelete: (id: number) => void;
    toggleComplete: (id: number) => void;
}

export const TaskList: FC<Props> = ({ tasks, onEdit, onDelete, toggleComplete }) => {
    return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
            <ul role="list" className="divide-y divide-gray-200">
                {
                    tasks.length > 0 ? (
                        tasks.map((task) => (
                            <li className="py-3 sm:py-4" key={task.id}>
                                <div className="flex items-center gap-3">
                                    <label
                                        className="flex gap-2 flex-1 min-w-0 cursor-pointer" 
                                        >
                                        <input 
                                            type="checkbox"   
                                            onChange={() => toggleComplete(task.id as number)}
                                            checked={task.isCompleted}
                                        />
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            { task.title }
                                        </p>
                                    </label>
                                    <span className="text-xs text-gray-700 truncate">{ task.createdAt }</span>
                                    <a
                                        href="#"
                                        onClick={() => onEdit(task)} 
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => onDelete(task.id as number)} 
                                        className="text-sm text-red-600 hover:underline"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </li>
                        ))
                    ) : (
                        <span>No items</span>    
                    )
                }   
            </ul>
        </div>
    )
}