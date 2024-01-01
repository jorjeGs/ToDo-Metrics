import { useState, useEffect } from "react"
import useUser from "../hooks/useUser"
import { Link } from "react-router-dom"
import { FaArrowLeft, FaPlus } from "react-icons/fa"
import TaskCard from "../components/TaskCard"
import TaskModal from "../components/TaskModal"

const Table = () => {
    //get the id from the url
    const id = window.location.href.split('/').pop()

    //get the table info from the custom hook, especifically the filtered tables by id
    const { userTables } = useUser()
    const tableInfo = userTables.filter(table => table.id === id)[0]

    const [table, setTable] = useState([])

    //state for the tasks of the table
    const [tasks, setTasks ] = useState([])

    //state for the modal
    const [show, setShow] = useState(false)

    //state for controlling wether the modal is for creating or editing a task
    const [action, setAction] = useState('create')

    //state for controlling selected task
    const [selectedTask, setSelectedTask] = useState(null)


    useEffect(() => {
        setTable(tableInfo)
        setTasks(tableInfo.tasks)
    }, [userTables])

    return (
        <>
            <div className="flex flex-col w-full h-fit justify-center items-center sm:mt-7 mt-4 mx-auto p-4 gap-4">
                <div className="flex flex-col w-full h-full justify-center gap-4">
                    <div className="go-back-btn flex sm:w-64 w-1/4 h-12 items-center bg-gray-200 shadow-md rounded-full my-auto">
                        <Link to="/home/tables"><FaArrowLeft className="sm:text-4xl text-3xl text-gray-600 my-auto mx-auto" /></Link>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center text-balance mt-4 mx-auto">{table.title}</h1>
                    <p className="table-description sm:text-2xl text-balance text-center mx-auto text-gray-400" >{table.data}</p>
                    <p className="text-gray-600 sm:text-2xl mx-auto"><strong className="text-blue-700">Create</strong> or <strong className="text-green-700">click</strong> an existing <strong>task</strong></p>
                </div>
                {/* on sm screens, the row will be width-screen-size, and will horizontally scroll, with breakpoints to prevent incomplete view of row */}
                <div className="flex flex-row w-full min-h-96 justify-center bg-gray-200 rounded-xl">
                    <div className="flex flex-col w-1/3 min-h-full justify-center gap-4 p-2 border-r-2 rounded-sm border-gray-300">
                        <div className="row-title flex flex-row justify-center items-center w-full h-12 bg-white shadow-md rounded-full my-auto">
                            <h1 className="text-xl sm:text-3xl font-bold text-red-500">To do</h1>
                        </div>
                        <div className="tasks-container flex flex-col w-full h-full text-center gap-4">
                            <div className="create-task flex flex-col mx-auto justify-center items-center w-10/12 max-w-64 sm:h-20 h-10 bg-white shadow-xl border-2 border-gray-200 rounded-md p-1 transition duration-200 transform hover:scale-110">
                                <button className="w-full h-full" onClick={() => {
                                    setAction('create')
                                    setSelectedTask(null)
                                    setShow(true)
                                }}>
                                    <FaPlus className="sm:text-3xl text-xl text-gray-400 text-center mx-auto" />
                                    <p className="text-gray-400 hidden sm:inline-block">New task</p>
                                </button>
                            </div>
                            {
                                tasks.length != 0 ? (
                                    tasks.map(task => (
                                        task.status === 'todo' && <TaskCard key={task.id} task={task} setAction={setAction} setShow={setShow} setTask={setSelectedTask} />
                                    ))
                                ) : (
                                    null
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 min-h-full justify-center gap-4 p-2 border-r-2 rounded-sm border-gray-300">
                        <div className="row-title flex flex-row justify-center items-center w-full h-12 bg-white shadow-md rounded-full my-auto">
                            <h1 className="text-xl sm:text-3xl font-bold text-yellow-500">Doing</h1>
                        </div>
                        <div className="tasks-container flex flex-col w-full h-full text-center gap-4">
                            {
                                tasks.length != 0 ? (
                                    tasks.map(task => (
                                        task.status === 'doing' && <TaskCard key={task.id} task={task} setAction={setAction} setShow={setShow} setTask={setSelectedTask} />
                                    ))
                                ) : (
                                    null
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 min-h-full gap-4 p-2">
                        <div className="row-title flex flex-row justify-center items-center w-full h-12 bg-white shadow-md rounded-full my-auto">
                            <h1 className="text-xl sm:text-3xl font-bold text-green-700">Done</h1>
                        </div>
                        <div className="tasks-container flex flex-col w-full h-full text-center gap-4">
                            {
                                tasks.length != 0 ? (
                                    tasks.map(task => (
                                        task.status === 'done' && <TaskCard key={task.id} task={task} setAction={setAction} setShow={setShow} setTask={setSelectedTask} />
                                    ))
                                ) : (
                                    null
                                )
                            }
                        </div>
                    </div>
                </div>
                {
                    show && <TaskModal show={show} setShow={setShow} table_id={id} action={action} task={selectedTask} />
                }
            </div>
        </>
    )
}

export default Table