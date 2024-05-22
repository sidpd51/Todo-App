import Task from "./Task"
import AddEditTask from "./AddEditTask"
import Dashboard from "./Dashboard"
import { Outlet } from "react-router-dom"

const Body = () => {
    return (<>
        <section className="overflow-hidden bg-gray-50 flex justify-content-between flex-1">
           <Outlet></Outlet>
        </section>
    </>)
}

export default Body