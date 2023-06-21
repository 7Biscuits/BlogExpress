import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";

const App = () => {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  return (
    <BrowserRouter>
      <div className="max-w-full min-h-screen dark:bg-gray-800">
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Index />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="blog"
              element={<Blog title={title} content={content} />}
            />
            <Route path="posts" element={<Blogs />} />
            <Route
              path="create"
              element={
                <CreatePost
                  newBlog={(title, content) => {
                    setTitle(title);
                    setContent(content);
                  }}
                />
              }
            />

            <Route path="/profile/:username" element={<Profile />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;