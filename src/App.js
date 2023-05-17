import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Post from './pages/Post';
import Posts from './pages/Posts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="post" element={<Post />} />
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}