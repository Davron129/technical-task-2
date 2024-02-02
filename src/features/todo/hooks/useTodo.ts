import { useState } from "react"
import { ITask } from "../types";
import { useModal } from "@shared/hooks";

export const useTodo = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const { closeModal } = useModal();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAdd = (payload: ITask) => {
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                createdAt: String(Date.now()),
                isCompleted: false,
                title: payload.title
            }
        ]);

        closeModal();
    }

    const handleEdit = (payload: ITask) => {
        const _tasks = tasks.map((t) => {
            if(t.id === payload.id) {
                return payload
            }
            return t
        });

        setTasks(_tasks);

        closeModal();
    }

    const handleClickAddTask = () => {
        setIsModalOpen(true);
    }

    return {
        isModalOpen,
        tasks,
        handleAdd,
        handleEdit,
        handleClickAddTask
    }
}