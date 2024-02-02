import { useState } from "react"
import { ITask } from "../types";
import { useModal } from "@shared/hooks";

export const useTodo = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const { closeModal } = useModal();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAdd = (title: string) => {
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                createdAt: String(Date.now()),
                isCompleted: false,
                title: title
            }
        ]);

        closeModal();
    }

    const handleEdit = (payload: ITask) => {
        const _tasks = tasks.map((t) => {
            if(t.id === payload.id) {
                return payload;
            }
            return t;
        });

        setTasks(_tasks);

        closeModal();
    }

    const handleDelete = (taskId: number) => {
        const _tasks = tasks.filter((t) => t.id !== taskId);

        setTasks(_tasks);
    }

    const handleClickAddTask = () => {
        setIsModalOpen(true);
    }

    const toggleComplete = (taskId: number) => {
        const _tasks = tasks.map((t) => {
            if(t.id === taskId) {
                return {
                    ...t,
                    isCompleted: !t.isCompleted
                }
            }
            return t;
        });

        setTasks(_tasks);
    }

    return {
        isModalOpen,
        tasks,
        handleAdd,
        handleEdit,
        handleDelete,
        handleClickAddTask,
        toggleComplete
    }
}