import { taskStore } from "../taskStore";
import { useNavigate } from "react-router-dom";

import TaskItem from "./TaskItem";

const TaskList = () => {
  const navigate = useNavigate()
  const tasks = taskStore((state) => state.tasks)
  const selectTask = taskStore((state) => state.selectTask)
  return (
    <div >
      <ul className="flex flex-col gap-4">
        {
          tasks.filter(task => !task.isDone).length === 0 ? (
            <>
              <p className="text-center text-2xl mt-4">No tasks available.</p>
            </>
          ) : (
            tasks.filter(task => !task.isDone).map((task) => (
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

export default TaskList;
