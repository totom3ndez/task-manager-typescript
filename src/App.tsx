import CreateTask from "./actions/CreateTask";
import Home from './pages/Home'
import TaskDetails from "./tasks/components/TaskDetails";
import Layout from "./layouts/Layout";
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
