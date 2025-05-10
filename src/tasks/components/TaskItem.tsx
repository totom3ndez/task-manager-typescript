import { IoPerson } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { MdTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { TaskInterface } from "../../taskStore";

const TaskItem = ({ task }: { task: TaskInterface }) => {
  return (
    <div
      className={`cursor-pointer relative px-4 py-2 mx-4 rounded-lg bg-[#202020] border-l-10 ${task.priority === 'high'
        ? 'border-red-500'
        : task.priority === 'medium'
          ? 'border-yellow-500'
          : 'border-green-500'
        }`}
    >
      <h3 className="flex gap-2 items-center text-xl">
        <MdTask /> {task.title}
      </h3>
      <p className="flex gap-2 items-center font-light">
        <BsListTask /> {task.description}
      </p>
      <div className="flex gap-2">
        <p className="flex gap-2 items-center font-light">
          <IoPerson /> {task.author}
        </p>
        <p className="flex gap-2 items-center font-light ">
          <CiCalendar /> {task.date} <span className="text-xs text-gray-500">Last update: {task.time}</span>
        </p>
      </div>
      <p className="absolute top-4 right-4 font-light">
        <span className={`text-xs ${task.isDone ? 'text-green-500' : 'text-red-500'}`}>
          {task.isDone ? 'Completed' : 'Pending'}
        </span>
      </p>
    </div>
  )
}

export default TaskItem