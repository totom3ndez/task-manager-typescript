import { create } from "zustand";


export interface TaskInterface {
    title: string;
    description: string;
    author: string;
    isDone: boolean;
    priority?: string;
    id: string;
    date: string;
    time: string;
    dueDate?: Date;      // Fecha límite opcional
    tags?: string[];     // Tags opcionales
    category?: string;   // Categoría opcional
}

export interface NewTask {
    title: string;
    description: string;
    author: string;
    priority?: string;
}

export interface Task extends NewTask {
    readonly id: string;
    isDone: boolean;
    createdAt: Date;
}

interface TaskStoreState {
    tasks: TaskInterface[];
    selectedTask: TaskInterface | null;
    selectTask: (task: TaskInterface, navigate: (path: string) => void) => void;
    createTask: (task: TaskInterface) => void;
    updateTask: (updatedTask: TaskInterface) => void;
}

const Tasks = [
    {
        title: 'Task 4',
        description: 'Description 1',
        author: 'Author 1',
        isDone: true,
        priority: 'low',
        id: crypto.randomUUID().slice(0, 8),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    },
    {
        title: 'Task 1',
        description: 'Description 4',
        author: 'Author 4',
        isDone: false,
        priority: 'high',
        id: crypto.randomUUID().slice(0, 8),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    }
    ,
    {
        title: 'Task 2',
        description: 'Description 5',
        author: 'Author 5',
        isDone: false,
        priority: 'medium',
        id: crypto.randomUUID().slice(0, 8),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    }
    ,
    {
        title: 'Task 3',
        description: 'Description 6',
        author: 'Author 6',
        isDone: false,
        priority: 'low',
        id: crypto.randomUUID().slice(0, 8),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    }
]


export const taskStore = create<TaskStoreState>((set) => ({
    // states
    tasks: Tasks as TaskInterface[],
    selectedTask: null,

    // functions
    selectTask: (task: TaskInterface, navigate) => {
        set(() => ({ selectedTask: task }));
        navigate("/task-details");
    },
    createTask: (task: TaskInterface) => set((state) => ({ tasks: [...state.tasks, task] })),
    updateTask: (updatedTask) => set((state) => ({ tasks: state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task), selectedTask: null }))
}));