import CreateTask from "./components/CreateTask";
import Home from './components/Home'
import TaskDetails from "./components/TaskDetails";
import Layout from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path='/task-details' element={<TaskDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
