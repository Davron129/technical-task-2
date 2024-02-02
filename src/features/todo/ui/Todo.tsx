import { SearchBar } from "./SearchBar"
import { TaskList } from "./TaskList"
import { Modal } from "@shared/modal"
import { TaskForm } from "./TaskForm"
import { useTodo } from "../hooks"
import { useModal } from "@shared/hooks"
import { ITask } from "../types"

export const Todo = () => {
    const { tasks, handleAdd, handleEdit } = useTodo();
    const { openModal, closeModal } = useModal();

    const handleAddTask = () => {
        openModal(
            <Modal
                title="Add New Task"
                onClose={closeModal}    
            >
                <TaskForm
                    onSubmit={handleAdd}
                    payload={{
                        title: ""
                    }}
                />
            </Modal>
        )
    }

    const handleEditTask = (task: ITask) => {
        openModal(
            <Modal
                title="Edit Task"
                onClose={closeModal}    
            >
                <TaskForm
                    onSubmit={handleEdit}
                    payload={task}
                />
            </Modal>
        )
    }



    return (
        <>
            <span className="text-2xl font-semibold">To Do List</span>

            <div className="flex gap-3 items-center my-5">
                <SearchBar />
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </div>

            <TaskList tasks={tasks} onEdit={handleEditTask} />

            <div className="flex mt-5 justify-end">
                <button 
                    onClick={handleAddTask}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add Task
                </button>
            </div>
        </>
    )
}