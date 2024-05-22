import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './components/Dashboard.jsx'
import AddEditTask from './components/AddEditTask.jsx'
import AllTasks from './components/AllTasks.jsx'
import RunningTasks from './components/RunningTasks.jsx'
import CompletedTasks from './components/CompletedTasks.jsx'
import Error from './Error.jsx'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    children: [
      {
        path:"/",
        element: <Dashboard />,
      },
      {
        path: "/addedit/",
        element: <AddEditTask></AddEditTask>,
      },
      {
        path: "/alltasks/",
        element: <AllTasks></AllTasks>
      },
      {
        path: "/runningtasks/",
        element: <RunningTasks></RunningTasks>
      },
      {
        path: "/completedtasks/",
        element: <CompletedTasks></CompletedTasks>
      }
    ],
    errorElement: <Error></Error>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
