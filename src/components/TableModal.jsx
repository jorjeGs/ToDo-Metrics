import { FaPlus } from "react-icons/fa"
import useUser from "../hooks/useUser"

const TableModal = (props) => {

    const { show, setShow} = props

    const { addTable, updateTable } = useUser()

    if (!show) {
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //using custom hook to add the table to the user tables
        addTable({
            id: crypto.randomUUID(),
            title: e.target.title.value,
            data: e.target.description.value,
            tasks: []
        })

        setShow(false)
    }

    return (
        <>  
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4">
                <div className="bg-white dark:bg-neutral-600 w-96 min-w-64 h-auto rounded-md flex flex-col justify-center items-center p-4 gap-3">
                    <h1 className="sm:text-3xl text-2xl font-bold text-gray-800 dark:text-gray-200 ">Create a new table</h1>
                    <form className="flex flex-col justify-center items-center w-full h-full gap-4" onSubmit={handleSubmit}>
                        <input type="text" name="title" id="title" placeholder="Title" className="w-full h-12 border-2 border-gray-200 rounded-md p-2 dark:bg-neutral-600 dark:text-gray-100" required/>
                        <textarea name="description" id="description" placeholder="Description" className="w-full h-32 border-2 border-gray-200 rounded-md p-2 dark:bg-neutral-600 dark:text-gray-100" required/>
                        <div className="flex justify-center items-center w-full gap-2">
                            <button type="submit" className="bg-green-700 primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2"><FaPlus />Create</button>
                            <button className="bg-red-700 primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2" type="button" onClick={() => setShow(false)}>Close</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default TableModal