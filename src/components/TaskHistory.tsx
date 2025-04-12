import { taskStore } from "../taskStore";
import { useNavigate } from "react-router-dom";

import TaskItem from "./TaskItem";

const TaskHistory = () => {
  const navigate = useNavigate()
  const tasks = taskStore((state) => state.tasks)
  const selectTask = taskStore((state) => state.selectTask)
  return (
    <div >
      <ul className="flex flex-col gap-4">
        <hr className="mt-6 mx-auto w-3/4 text-blue-500 border-2 rounded-3xl" />
        <h2 className="text-center text-3xl mb-6">Completed tasks</h2>
        {
          tasks.filter(task => task.isDone).length === 0 ? (
            <>
              <p className="text-center text-2xl mt-4">No tasks completed.</p>
            </>
          ) : (
            tasks.filter(task => task.isDone).map((task) => (
              <li key={task.id} onClick={() => selectTask(task, navigate)}>
                <TaskItem task={task} />
              </li>

            )
            )
          )
        }
      </ul>
    </div>
  )
}

export default TaskHistory;
