import './App.css'
import { Routes, Route } from 'react-router-dom'
import MenteeRegister from './pages/MenteeRegister'
import MentorRegister from './pages/MentorRegister'

function App() {

  return (
    <div>

      <Routes>
        <Route path='/mentee-register' element={<MenteeRegister />} />
        <Route path='/mentor-register' element={<MentorRegister />} />
      </Routes>

    </div>
  )
}

export default App
