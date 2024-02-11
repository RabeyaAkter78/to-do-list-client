
import { Link } from 'react-router-dom'
import './App.css'
import AddATask from './Components/AddTask/AddTask'
function App() {
  const navTools =
    <>
      <li className="font-bold"><Link to='/allTasks' >ALL TASKS</Link></li>
      {/* <li className="font-bold"><Link to='/addTask'>ADD A TASKS</Link></li> */}
    </>
  return (
    <div>
      <div className="navbar mb-4 bg-orange-200">
        <div className="navbar-start ">
          <h2 className='text-3xl font-bold'>TODO LIST</h2>

        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-bold">
            {navTools}
          </ul>
        </div>
      </div>
      <AddATask></AddATask>
    </div>

  )
}

export default App
