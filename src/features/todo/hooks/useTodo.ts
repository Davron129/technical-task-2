import { useState } from "react"
import { ITask } from "../types";
import { useModal } from "@shared/hooks";

const TASKS_KEY = 'tasks';

const getFromStore = (): ITask[] => {
    const tasks = localStorage.getItem(TASKS_KEY);

    if(tasks) {
        return JSON.parse(tasks);
    }

    return [];
}

const saveToStore = (tasks: ITask[]) => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export const useTodo = () => {
    const [tasks, setTasks] = useState<ITask[]>(getFromStore());
    const { closeModal } = useModal();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const saveTasks = (tasks: ITask[]) => {
        setTasks(tasks);
        saveToStore(tasks);
    }

    const handleAdd = (title: string) => {
        saveTasks([
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

        saveTasks(_tasks);

        closeModal();
    }

    const handleDelete = (taskId: number) => {
        const _tasks = tasks.filter((t) => t.id !== taskId);

        saveTasks(_tasks);
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

        saveTasks(_tasks);
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