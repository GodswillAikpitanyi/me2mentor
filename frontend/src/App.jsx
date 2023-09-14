import './App.css'
import { Routes, Route } from 'react-router-dom'
import MenteeRegister from './pages/MenteeRegister'
import MentorRegister from './pages/MentorRegister'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Services from './pages/Services'


function App() {

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/mentee-register' element={<MenteeRegister />} />
        <Route path='/mentor-register' element={<MentorRegister />} />
      </Routes>

    </div>
  )
}

export default App