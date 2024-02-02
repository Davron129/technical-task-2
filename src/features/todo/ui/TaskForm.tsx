import { FC, FormEvent, useState } from "react"
import { ITask } from "../types";


interface Props {
    taskTitle: ITask['title'];
    onSubmit: (title: ITask['title']) => void,
}

export const TaskForm: FC<Props> = ({
    taskTitle,
    onSubmit
}) => {
    const [title, setTitle] = useState(taskTitle);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(title);
    }

    return (
        <form className="p-5" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                <input
                    id="title"
                    name="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}