import { taskStore } from "../../taskStore";
import { useNavigate } from "react-router-dom";

import TaskItem from "./TaskItem";
import { useState } from "react";

type Priority = 'high' | 'medium' | 'low';

const TaskList = () => {
  const navigate = useNavigate()
  const tasks = taskStore((state) => state.tasks)
  const selectTask = taskStore((state) => state.selectTask)
  const [filter, setFilter] = useState('')

  function filteredTask(filter: string) {
    return (
      <ul className="grid grid-cols-1 gap-4 mx-auto">
        {
          tasks.length == 0 ? <p className="text-xl text-center">No task found</p> :
            tasks
              .sort((a, b) => {
                const priorityOrder: Record<Priority, number> = {
                  high: 1,
                  medium: 2,
                  low: 3
                };
                return priorityOrder[a.priority as Priority] - priorityOrder[b.priority as Priority];
              })
              .map((task) =>
                ((task.priority === filter || filter === '') && !task.isDone) ? (
                  <li key={task.id} onClick={() => selectTask(task, navigate)}>
                    <TaskItem task={task} />
                  </li>
                ) : null
              )
        }
      </ul>
    )
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter(e.target.value)
  }

  return (
    <>
      <div className="flex mx-auto justify-center items-center gap-4 mb-10">
        <p>Filter by priority</p>
        <select onChange={handleChange} name="filter" id="filterOpt" className="bg-black border-2 rounded-lg p-2 w-1/4 text-center">
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      {filteredTask(filter)}
    </>
  )

}

export default TaskList;
