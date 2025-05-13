import { taskStore } from "../../taskStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../globals/components/Button";
import { useUser } from "@clerk/clerk-react";

const TaskDetails = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const selectedTask = taskStore((state) => state.selectedTask);
  const updateTask = taskStore((state) => state.updateTask);

  const [taskDetails, setTaskDetails] = useState(selectedTask || { title: "", description: "", priority: "", author: "", isDone: false, id: "", date: "", time: "" });

  useEffect(() => {
    if (selectedTask) {
      setTaskDetails(selectedTask);
    }
  }, [selectedTask]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskDetails((prev) => ({ ...prev, [name]: value, time: new Date().toLocaleTimeString(), author: user?.fullName || "Unknown" }));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskDetails.title && taskDetails.description) {
      const updatedTask = { ...taskDetails, author: user?.fullName || "Unknown", time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString() };
      updateTask(updatedTask);
      navigate('/');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleCancel = () => {
    navigate('/');
  }

  const handleDelete = () => {
    if (
      window.confirm('Are you sure you want to delete this task?')
    ) {
      taskStore.setState((state) => ({ tasks: state.tasks.filter(task => task.id !== selectedTask?.id) }));
      navigate('/');
    } else {
      navigate('/');
    }
  }


  return (
    <form onSubmit={handleSave} className="p-4">
      <label className='flex flex-col gap-4' htmlFor="title">
        Title
        <input
          className='p-2 border-2 rounded-xl'
          type="text"
          name="title"
          value={taskDetails.title}
          onChange={handleChange}
          required
          minLength={5}
        />
      </label>
      <label className='flex flex-col gap-2' htmlFor="description">
        Description
        <input
          className='p-2 border-2 rounded-xl'
          type="text"
          name="description"
          value={taskDetails.description}
          onChange={handleChange}
          required
          minLength={5}
          maxLength={100}
        />
      </label>
      Priority
      <div className="flex gap-2 justify-around">
        <label htmlFor="low">Low</label>
        <input
          type="radio"
          name="priority"
          id="low"
          value="low"
          onChange={handleChange}
          checked={taskDetails.priority === "low"}
        />
        <label htmlFor="medium">Medium</label>
        <input
          type="radio"
          name="priority"
          id="medium"
          value="medium"
          onChange={handleChange}
          checked={taskDetails.priority === "medium"}
        />
        <label htmlFor="high">High</label>
        <input
          type="radio"
          name="priority"
          id="high"
          value="high"
          onChange={handleChange}
          checked={taskDetails.priority === "high"}
        />
      </div>
      <div className="flex gap-4 p-4 text-xl items-center justify-center">
        Is done?
        <input
          type="checkbox"
          name="isDone"
          id="isDone"
          checked={taskDetails.isDone}
          className="w-4 h-4"
          onChange={(e) => setTaskDetails((prev) => ({ ...prev, isDone: e.target.checked }))}
        />
      </div>
      <Button color="p-2 rounded-xl bg-green-500 w-full mt-4" type="submit">Save</Button>
      <Button color="p-2 rounded-xl bg-red-500 w-full mt-4" type="submit" onClick={handleDelete}>Delete</Button>
      <Button color="p-2 rounded-xl bg-gray-500 w-full mt-4" type="button" onClick={handleCancel}>Cancel</Button>
    </form>
  );
};

export default TaskDetails;