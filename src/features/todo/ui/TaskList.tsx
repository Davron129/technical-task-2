import { FC } from "react"
import { ITask } from "../types"

interface Props {
    tasks: ITask[];
    onEdit: (value: ITask) => void;
    onDelete: (id: number) => void;
}

export const TaskList: FC<Props> = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
            <ul role="list" className="divide-y divide-gray-200">
                {
                    tasks.length > 0 ? (
                        tasks.map((task) => (
                            <li className="py-3 sm:py-4" key={task.createdAt}>
                                <div className="flex items-center gap-3">
                                    <span className={`flex w-3 h-3 bg-${task.isCompleted ? "green" : "red"}-500 rounded-full`}></span>

                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            { task.title }
                                        </p>
                                    </div>
                                    <a href="#" onClick={() => onEdit(task)} className="text-sm text-blue-600 hover:underline">Edit</a>
                                    <a href="#" onClick={() => onDelete(task.id as number)} className="text-sm text-red-600 hover:underline">Delete</a>
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