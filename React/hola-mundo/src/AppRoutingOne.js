import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import AboutPage from "./pages/about/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskListComponent from "./components/container/task_list";
import TaskDetailPage from "./tasks/TaskDetailPage";
import LoginFormik from "./components/pure/forms/loginFormik";
import { useEffect } from "react";

function AppRoutingOne() {

  let logged = true;

  let  taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'lorem ipsum'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'lorem ipsum'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem("credentials");
    console.log('logged?', logged)
  }, []);

  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to="/">| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/profile">| PROFILE |</Link>
          <Link to="/login">| LOGIN |</Link>
        </aside>
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route
              exact
              path="/login"
              element={logged ? <ProfilePage /> : <LoginFormik />}
            />
            <Route
              exact
              path="/profile"
              element={logged ? <ProfilePage /> : <Navigate to="/login" />}
            ></Route>
            <Route exact path="/tasks" element={<TaskListComponent />} />
            <Route exact path="/tasks/:id" element={<TaskDetailPage  />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutingOne;
