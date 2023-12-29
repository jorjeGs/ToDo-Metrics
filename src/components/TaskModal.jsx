import { FaPlus } from "react-icons/fa"

const TaskModal = (props) => {

    const { show, setShow, setTableTasks, table_id, action = 'create', task } = props

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
            console.log(task)
        }

    }

    const createTask = (e) => {
        //set the new table in the tables array (this could be done with a database or context provider)
        //in this case, we will use the setTables function from the Tables component to update the state
        setTableTasks(prevState => [...prevState, {
            id: crypto.randomUUID(),
            table_id: e.target.table_id.value,
            title: e.target.title.value,
            description: e.target.description.value,
            status: e.target.status.value,
            date: new Date().toLocaleDateString()
        }])
        setShow(false)
    }

    const editTask = (e) => {
        //on edit, we will find the task in the tasks array and update it
        //in this case, we will use the setTableTasks function from the Table component to update the state
        setTableTasks(prevState => {
            const taskIndex = prevState.findIndex(task => task.id === e.target.id.value)
            prevState[taskIndex] = {
                id: e.target.id.value,
                table_id: e.target.table_id.value,
                title: e.target.title.value,
                description: e.target.description.value,
                status: e.target.status.value,
                date: new Date().toLocaleDateString()
            }
            setShow(false)
            return prevState
        }
        )
    }

    const handleDelete = () => {
        //on delete, we will find the task in the tasks array and delete it
        //in this case, we will use the setTableTasks function from the Table component to update the state
        //also, we will use a simple alert to confirm the action
        if (!window.confirm('Are you sure you want to delete this task?')) {
            return
        }
        setTableTasks(prevState => {
            const taskIndex = prevState.findIndex(task => task.id === task.id)
            prevState.splice(taskIndex, 1)
            setShow(false)
            return prevState
        })
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4">
                <div className="bg-white w-96 min-w-64 h-auto rounded-md flex flex-col justify-center items-center p-4 gap-3">
                    <h1 className="sm:text-3xl text-2xl font-bold text-gray-800">{task ? 'Edit Task' : 'New Task'}</h1>
                    <form className="flex flex-col justify-center items-center w-full h-full gap-4" onSubmit={handleSubmit}>
                        <input type="text" name="title" id="title" placeholder="Title" defaultValue={task ? task.title : ''} className="w-full h-12 border-2 border-gray-200 rounded-md p-2" required />
                        <input type="text" name="action" id="action" hidden defaultValue={action} readOnly required />
                        {
                            task && <input type="text" name="id" id="id" hidden defaultValue={task.id} />
                        }
                        <input type="text" name="table_id" id="table_id" hidden defaultValue={task ? task.table_id : table_id} />
                        <select name="status" id="status" defaultValue={task ? task.status : ''} className="w-full h-12 border-2 border-gray-200 rounded-md p-2" required>
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <textarea name="description" id="description" placeholder="Description" defaultValue={task ? task.description : ''} className="w-full h-32 border-2 border-gray-200 rounded-md p-2" required />
                        <button type="submit" className="bg-green-700 primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2"><FaPlus />{action == 'edit' ? 'Edit' : 'Create'}</button>
                    </form>
                    {
                        task && <button className="bg-red-700 primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2" onClick={() => handleDelete()}>Delete</button>
                    }
                    <button className="bg-black primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2" onClick={() => setShow(false)}>Close</button>
                </div>
            </div>
        </>
    )
}

export default TaskModal