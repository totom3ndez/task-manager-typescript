import CreateTask from "./actions/CreateTask";
import Home from './pages/Home'
import TaskDetails from "./tasks/components/TaskDetails";
import Layout from "./layouts/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./globals/components/ProtectedRoute";



function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/create-task"
              element={
                <ProtectedRoute>
                  <CreateTask />
                </ProtectedRoute>
              } />
            <Route
              path='/task-details'
              element={
                <ProtectedRoute>
                  <TaskDetails />
                </ProtectedRoute>
              } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
