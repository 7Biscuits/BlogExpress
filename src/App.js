import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import CreatePost from "./pages/CreatePost";
import NoPage from "./pages/NoPage";

export default function App() {

  let [title, setTitle] = useState('')
  let [content, setContent] = useState('')

  return (
    <div className="max-w-full min-h-screen dark:bg-gray-800">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="blog" element={<Blog title={title} content={content} />} />
            <Route path="posts" element={<Blogs />} />
            <Route path="create" element={<CreatePost newBlog={(title, content) => { setTitle(title); setContent(content); }} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}