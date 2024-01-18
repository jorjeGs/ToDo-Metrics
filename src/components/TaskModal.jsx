import useUser from "../hooks/useUser"
import { FaPlus } from "react-icons/fa"

const TaskModal = (props) => {

    const { show, setShow, table_id, action = 'create', task } = props

    const { addTask, updateTask, deleteTask } = useUser()

    if (!show) {
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //verify the action
        if (action === 'create') {
            createTask(e)
        } else if (action === 'edit') {
            editTask(e)
        }

    }

    const createTask = (e) => {

        //using the addTask function from the useUser hook
        addTask({
            id: crypto.randomUUID(),
            table_id: e.target.table_id.value,
            title: e.target.title.value,
            description: e.target.description.value,
            status: e.target.status.value,
            date: new Date().toLocaleDateString()
        })
        setShow(false)
    }

    const editTask = (e) => {

        //using the updateTask function from the useUser hook
        updateTask({
            id: e.target.id.value,
            table_id: e.target.table_id.value,
            title: e.target.title.value,
            description: e.target.description.value,
            status: e.target.status.value,
            date: new Date().toLocaleDateString()
        })
        setShow(false)

    }

    const handleDelete = () => {
        //on delete, we will find the task in the tasks array and delete it
        //in this case, we will use the setTableTasks function from the Table component to update the state
        //also, we will use a simple alert to confirm the action
        if (!window.confirm('Are you sure you want to delete this task?')) {
            return
        }
        //using the deleteTask function from the useUser hook
        deleteTask({
            id: task.id,
            table_id: task.table_id
        })
        setShow(false)
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4">
                <div className="bg-white dark:bg-neutral-600 w-96 min-w-64 h-auto rounded-md flex flex-col justify-center items-center p-4 gap-3">
                    <h1 className="sm:text-3xl text-2xl font-bold text-gray-800 dark:text-gray-200">{task ? 'Edit Task' : 'New Task'}</h1>
                    <form className="flex flex-col justify-center items-center w-full h-full gap-4" onSubmit={handleSubmit}>
                        <input type="text" name="title" id="title" placeholder="Title" defaultValue={task ? task.title : ''} className="w-full h-12 border-2 border-gray-200 rounded-md p-2 dark:bg-neutral-600 dark:text-gray-100" required />
                        <input type="text" name="action" id="action" hidden defaultValue={action} readOnly required />
                        {
                            task && <input type="text" name="id" id="id" hidden defaultValue={task.id} />
                        }
                        <input type="text" name="table_id" id="table_id" hidden defaultValue={task ? task.table_id : table_id} />
                        <div className="flex justify-center items-center w-full gap-2">
                            <select name="status" id="status" defaultValue={task ? task.status : ''} className="w-full h-12 border-2 border-gray-200 rounded-md p-2 dark:bg-neutral-600 dark:text-gray-100" required>
                                <option value="todo">To do</option>
                                <option value="doing">Doing</option>
                                <option value="done">Done</option>
                            </select>
                            {
                                task && <p className="text-gray-400 dark:text-neutral-300">Created at <strong>{task.date}</strong></p>
                            }
                        </div>
                        <textarea name="description" id="description" placeholder="Description" defaultValue={task ? task.description : ''} className="w-full h-32 border-2 border-gray-200 rounded-md p-2 dark:bg-neutral-600 dark:text-gray-100" required />
                        <div className="flex justify-center items-center w-full gap-2">
                            <button type="submit" className="bg-green-700 primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2"><FaPlus />{action == 'edit' ? 'Edit' : 'Create'}</button>
                            {
                                task && <button className="bg-red-700 primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2" type="button" onClick={() => handleDelete()}>Delete</button>
                            }
                            <button className="bg-black primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2" type="button" onClick={() => setShow(false)}>Close</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default TaskModal