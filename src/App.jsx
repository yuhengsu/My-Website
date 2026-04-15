import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  )
}
