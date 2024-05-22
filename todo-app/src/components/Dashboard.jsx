import Task from "./Task"

const Dashboard = () => {
    return (
        <div className="w-5/6 mx-auto h-auto mt-16">
            <div className="grid md:grid-cols-2 gap-4">
                <Task></Task>
                <Task></Task>
            </div>
        </div>
    )
}

export default Dashboard