import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './Component/BottomNav'
import Todo from './pages/Todo'
import Calories from './pages/Calories'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/calories" element={<Calories />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App
