import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import CreatePost from "./pages/CreatePost";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <div className="max-w-full min-h-screen dark:bg-gray-800">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="post"
              element={<Blog title="Title" content="Content" user="User" />}
            />
            <Route path="posts" element={<Blogs />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
