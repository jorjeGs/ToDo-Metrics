import { FaPlus } from "react-icons/fa"

const TableModal = (props) => {

    const { show, setShow, setTables } = props

    if (!show) {
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.title.value)
        console.log(e.target.description.value)

        //set the new table in the tables array (this could be done with a database or context provider)
        //in this case, we will use the setTables function from the Tables component to update the state
        setTables(prevState => [...prevState, {
            id: prevState.length + 1,
            title: e.target.title.value,
            data: e.target.description.value
        }])
        setShow(false)
    }

    return (
        <>  
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4">
                <div className="bg-white w-96 min-w-64 h-auto rounded-md flex flex-col justify-center items-center p-4 gap-3">
                    <h1 className="sm:text-3xl text-2xl font-bold text-gray-800">Create a new table</h1>
                    <form className="flex flex-col justify-center items-center w-full h-full gap-4" onSubmit={handleSubmit}>
                        <input type="text" name="title" id="title" placeholder="Title" className="w-full h-12 border-2 border-gray-200 rounded-md p-2" required/>
                        <textarea name="description" id="description" placeholder="Description" className="w-full h-32 border-2 border-gray-200 rounded-md p-2" required/>
                        <button type="submit" className="bg-green-700 primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2"><FaPlus />Create</button>
                    </form>
                    <button className="bg-red-700 primary-btn w-full h-12 rounded-full flex justify-center items-center gap-2" onClick={() => setShow(false)}>Close</button>
                </div>
            </div>
        </>
    )
}

export default TableModal