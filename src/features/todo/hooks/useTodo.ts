import { useState } from "react"
import { ITask } from "../types";
import { useModal } from "@shared/hooks";
import { TodoStatus } from "../enums";

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
    const { closeModal } = useModal();
    const [tasks, setTasks] = useState<ITask[]>(getFromStore());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState<TodoStatus | null>(null);

    const saveTasks = (tasks: ITask[]) => {
        setTasks(tasks);
        saveToStore(tasks);
    }

    const handleAdd = (title: string) => {
        const now = Date.now();
        
        saveTasks([
            ...tasks,
            {
                id: now,
                createdAt: new Date(now).toLocaleDateString('ru') + " " + new Date(now).toLocaleTimeString('ru'),
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

    const searchTask = (query: string) => {
        const words = query.toLowerCase().split(' ');

        if(!query) {
            setTasks(getFromStore());
        } else {
            const _tasks = tasks.filter((task) => {
                return words.every((word) => task.title.toLowerCase().includes(word))
            });
    
            setTasks(_tasks);
        }
    }

    const deleteAll = () => {
        saveTasks([]);
        closeModal();
    }

    const filterByStatus = (status: TodoStatus | "") => {
        if(status === '') {
            setFilter(null);
            saveTasks(getFromStore());
        } else {
            const isCompleted = TodoStatus.Completed === status;
    
            const _tasks = getFromStore().filter((task) => task.isCompleted === isCompleted)
    
            setTasks(_tasks);
            setFilter(status)
        }
        closeModal();
    }

    return {
        isModalOpen,
        tasks,
        handleAdd,
        handleEdit,
        handleDelete,
        handleClickAddTask,
        toggleComplete,
        searchTask,
        deleteAll,
        filter,
        filterByStatus
    }
}