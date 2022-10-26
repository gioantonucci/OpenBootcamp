import TaskListComponent from "./components/container/task_list";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import AboutPage from "./pages/about/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskDetailPage from "./tasks/TaskDetailPage";
import LoginFormik from "./components/pure/forms/loginFormik";
import "./App.css";
import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  let logged = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/login" element=<LoginFormik />/>
          <Route exact path="/dashboard" element={logged ? <DashBoard /> : <Navigate to="/login" />}></Route>
          <Route exact path="/profile" element={logged ? <ProfilePage /> : <Navigate to="/login" />}></Route>
          <Route exact path="/tasks" element={<TaskListComponent />} />
          <Route exact path="/tasks/:id" element={<TaskDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
