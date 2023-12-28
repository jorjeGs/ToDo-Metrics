import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft, FaPlus } from "react-icons/fa"
import TaskCard from "../components/TaskCard"

const Table = () => {
    //get the id from the url
    const id = window.location.href.split('/').pop()

    //tasks would be fetched from the database or the context, filtered by table_id
    //it would be something like this:
    //tasksContext will be imported from the context file and will contain all the tasks
    // const { tasks } = useContext(TasksContext)
    // const filteredTasks = tasks.filter(task => task.table_id === id)
    const tasks = [
        {
            id: 1,
            table_id: 1,
            title: "Task 1",
            description: "This is a description of task 1",
            status: "todo",
            date: "2021-08-01"
        },
        {
            id: 2,
            table_id: 1,
            title: "Task 2",
            description: "This is a description of task 2",
            status: "doing",
            date: "2021-08-01"
        },
        {
            id: 3,
            table_id: 1,
            title: "Task 3",
            description: "This is a description of task 3",
            status: "done",
            date: "2021-08-01"
        },
    ]

    const [tableTasks, setTableTasks] = useState([])

    useEffect(() => {
        setTableTasks(tasks)
    }, [])

    return (
        <>
            <div className="flex flex-col w-full h-fit justify-center items-center mt-7 mx-auto p-4 gap-4">
                <div className="flex flex-col w-full h-full justify-center items-center text-center gap-4">
                    <div className="go-back-btn flex justify-center items-center w-64 h-12 bg-gray-200 shadow-md rounded-full my-auto">
                        <Link to="/home/tables"><FaArrowLeft className="sm:text-4xl text-3xl text-gray-600 my-auto mx-auto" /></Link>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Table {id}</h1>
                    <p className="text-gray-600 sm:text-2xl"><strong className="text-blue-700">Create</strong> or <strong className="text-green-700">click</strong> an existing <strong>task</strong></p>
                </div>
                {/* on sm screens, the row will be width-screen-size, and will horizontally scroll, with breakpoints to prevent incomplete view of row */}
                <div className="flex flex-row w-full min-h-96 justify-center bg-gray-200 rounded-xl">
                    <div className="flex flex-col w-1/3 min-h-full justify-center gap-4 p-2 border-r-2 rounded-sm border-gray-300">
                        <div className="row-title flex flex-row justify-center items-center w-full h-12 bg-white shadow-md rounded-full my-auto">
                            <h1 className="text-2xl sm:text-3xl font-bold text-red-500">To do</h1>
                        </div>
                        <div className="tasks-container flex flex-col w-full h-full text-center gap-4">
                            <div className="create-task flex flex-col mx-auto justify-center items-center w-10/12 max-w-64 h-20 bg-white shadow-xl border-2 border-gray-200 rounded-md p-1 transition duration-200 transform hover:scale-110">
                                <button className="w-full h-full">
                                    <FaPlus className="text-3xl text-gray-400 text-center mx-auto" />
                                    <p className="text-gray-400">New task</p>
                                </button>
                            </div>
                            {
                                tableTasks.length != 0 ? (
                                    tableTasks.map(task => (
                                        task.status === 'todo' && <TaskCard key={task.id} id={task.id} table_id={task.table_id} title={task.title} description={task.description} status={task.status} date={task.date} />
                                    ))
                                ) : (
                                    <p>No tasks found</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 min-h-full justify-center gap-4 p-2 border-r-2 rounded-sm border-gray-300">
                        <div className="row-title flex flex-row justify-center items-center w-full h-12 bg-white shadow-md rounded-full my-auto">
                            <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500">Doing</h1>
                        </div>
                        <div className="tasks-container flex flex-col w-full h-full text-center gap-4">
                            <div className="create-task flex flex-col mx-auto justify-center items-center w-10/12 max-w-64 h-20 bg-white shadow-xl border-2 border-gray-200 rounded-md p-1 transition duration-200 transform hover:scale-110">
                                <button className="w-full h-full">
                                    <FaPlus className="text-3xl text-gray-400 text-center mx-auto" />
                                    <p className="text-gray-400">New task</p>
                                </button>
                            </div>
                            {
                                tableTasks.length != 0 ? (
                                    tableTasks.map(task => (
                                        task.status === 'doing' && <TaskCard key={task.id} id={task.id} table_id={task.table_id} title={task.title} description={task.description} status={task.status} date={task.date} />
                                    ))
                                ) : (
                                    <p>No tasks found</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 min-h-full gap-4 p-2">
                        <div className="row-title flex flex-row justify-center items-center w-full h-12 bg-white shadow-md rounded-full my-auto">
                            <h1 className="text-2xl sm:text-3xl font-bold text-green-700">Done</h1>
                        </div>
                        <div className="tasks-container flex flex-col w-full h-full text-center gap-4">
                            <div className="create-task flex flex-col mx-auto justify-center items-center w-10/12 max-w-64 h-20 bg-white shadow-xl border-2 border-gray-200 rounded-md p-1 transition duration-200 transform hover:scale-110">
                                <button className="w-full h-full">
                                    <FaPlus className="text-3xl text-gray-400 text-center mx-auto" />
                                    <p className="text-gray-400">New task</p>
                                </button>
                            </div>
                            {
                                tableTasks.length != 0 ? (
                                    tableTasks.map(task => (
                                        task.status === 'done' && <TaskCard key={task.id} id={task.id} table_id={task.table_id} title={task.title} description={task.description} status={task.status} date={task.date} />
                                    ))
                                ) : (
                                    <p>No tasks found</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table