import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostsPage from './pages/PostsPage'
import PostDetailPage from './pages/PostDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
