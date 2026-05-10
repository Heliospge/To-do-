import { useState } from 'react'
import TaskList from './Component/TaskList'
import './App.css'

function App() {
  

  return (
    <div className='app-container'>
      <h1>TO DO</h1>
      <TaskList></TaskList>

    </div>
  )
}

export default App
