import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTask from './Components/AddTask/AddTask.jsx';
import AllTasks from './Components/AllTasks/AllTasks.jsx';
import UpdateTask from './Components/UpdateTask/UpdateTask.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path:"addTask",
    element:<AddTask></AddTask>
  },
  {
    path:"allTasks",
    element:<AllTasks></AllTasks>
  },
  {
    path: 'updateData/:id',
    element:<UpdateTask></UpdateTask>,
    loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`)
}


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className=' font-serif'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
