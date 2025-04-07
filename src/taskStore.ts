import { create } from "zustand";

// Hardcoded tasks

export interface TaskInterface {
    title: string;
    description: string;
    author: string;
    isDone: boolean;
    priority: string;
    id: string;
    date: string;
    time: string;
}

const Tasks = [{
    title: 'Task 1',
    description: 'Description 1',
    author: 'Author 1',
    isDone: false,
    priority: 'low',
    id: crypto.randomUUID().slice(0, 8),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
},
{
    title: 'Task 2',
    description: 'Description 2',
    author: 'Author 2',
    isDone: false,
    priority: 'low',
    id: crypto.randomUUID().slice(0, 8),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
},
{
    title: 'Task 3',
    description: 'Description 3',
    author: 'Author 3',
    isDone: false,
    priority: 'low',
    id: crypto.randomUUID().slice(0, 8),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
}
]

interface TaskStoreState {
    tasks: TaskInterface[];
    selectedTask: TaskInterface | null;
    selectTask: (task: TaskInterface, navigate: (path: string) => void) => void;
    createTask: (task: TaskInterface) => void;
    updateTask: (updatedTask: TaskInterface) => void;
}

export const taskStore = create<TaskStoreState>((set) => ({
    // states
    tasks: Tasks,
    selectedTask: null,

    // functions
    selectTask: (task: TaskInterface, navigate) => {
        set(() => ({ selectedTask: task }));
        navigate("/task-details");
    },
    createTask: (task: TaskInterface) => set((state) => ({ tasks: [...state.tasks, task] })),
    updateTask: (updatedTask) => set((state) => ({ tasks: state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task), selectedTask: null }))
}));