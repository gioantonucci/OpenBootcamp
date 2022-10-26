import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import AboutPage from "./pages/about/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskListComponent from "./components/container/task_list";
import TaskDetailPage from "./tasks/TaskDetailPage";

function AppRoutingOne() {
  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to="/">| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/profile">| PROFILE |</Link>
        </aside>
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path='/tasks' element={<TaskListComponent/>}/>
            <Route exact path='/tasks/:id' element={<TaskDetailPage/>}/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutingOne;
