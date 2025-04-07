import { useState } from 'react'
import { taskStore } from '../taskStore'
import { useNavigate } from 'react-router-dom'

const CreateTask = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: '',
    description: '',
    author: '',
    isDone: false,
    priority: 'low',
    id: crypto.randomUUID().slice(0, 8),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()

  })
  const createTask = taskStore((state) => state.createTask)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createTask(data) // Create task
    navigate('/') // Go back to task list.
  }

  return (
    <form className='flex flex-col gap-4 p-6' onSubmit={handleSubmit}>
      <label className='flex flex-col gap-2' htmlFor="title">
        Title
        <input className='p-2 border-2 rounded-xl' type="text" name='title' onChange={handleChange} required minLength={5} />
      </label>
      <label className='flex flex-col gap-2' htmlFor="description">
        Description
        <input className='p-2 border-2 rounded-xl' type="text" name='description' onChange={handleChange} required minLength={5} />
      </label>
      Priority
      <label className='flex gap-2 justify-around' htmlFor="priority">
        <label htmlFor="low">Low</label>
        <input type="radio" name="priority" id="low" value='low' onChange={handleChange} />
        <label htmlFor="medium">Medium</label>
        <input type="radio" name="priority" id="medium" value='medium' onChange={handleChange} />
        <label htmlFor="high">High</label>
        <input type="radio" name="priority" id="high" value='high' onChange={handleChange} />
      </label>
      <label className='flex flex-col gap-2' htmlFor="author">
        Autor
        <input className='p-2 border-2 rounded-xl' type="text" name='author' onChange={handleChange} required minLength={5} />
      </label>
      <button type="submit">Create</button>
    </form>
  )
}

export default CreateTask