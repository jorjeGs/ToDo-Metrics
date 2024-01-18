import { useState, useEffect } from "react"
import useUser from "../hooks/useUser";
import TableCard from "../components/TableCard"
import TableModal from "../components/TableModal";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPlus, FaSearch } from "react-icons/fa";

const Tables = () => {

    const { userTables } = useUser()

    const [filteredTables, setFilteredTables] = useState([])

    const [show, setShow] = useState(false)

    useEffect(() => {
        setFilteredTables(userTables)
    }, [userTables])

    const handleSearch = (e) => {
        e.preventDefault()

        const input = e.target.search
        const value = input.value.toLowerCase()
        const filtered = userTables.filter(table => table.title.toLowerCase().includes(value))
        setFilteredTables(filtered)

        //also set to display inline the clear button, wich is outside the form, using not querySelector but getElementById
        document.getElementById('clear').style.display = 'inline'

    }

    const clearSearch = () => {
        setFilteredTables(userTables)
        document.querySelector('input[name="search"]').value = ''
        document.getElementById('clear').style.display = 'none'
    }

    return (
        <>
            <div className="flex flex-col w-full h-full justify-center items-center mt-7 mx-auto p-4 gap-4">
                <div className="flex flex-col w-full h-full justify-center items-center text-center gap-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100">Tables</h1>
                    <p className="text-gray-600 dark:text-gray-300 sm:text-2xl"><strong className="text-blue-700">Create</strong> or <strong className="text-green-700">click</strong> an existing table</p>
                </div>
                <div className="search-bar flex flex-row justify-center items-center sm:w-7/12 w-full h-12 dark:bg-neutral-600 shadow-md rounded-full my-auto">
                    <button className="max-w-2/12 ml-3 h-full rounded-full text-center hidden transition duration-200 ease-in-out" id="clear" name="clear" onClick={clearSearch}><TiDeleteOutline className="sm:text-4xl text-3xl text-red-500 my-auto" /></button>
                    <form className="w-full h-full flex flex-row justify-center my-auto items-center rounded-full" onSubmit={handleSearch} aria-label='Search table Form'>
                        <input type="text" className="w-full h-full outline-none px-2 rounded-full dark:bg-neutral-600 dark:text-white" name="search" id="search" required placeholder="Search by title..." />
                        <button type='submit' className="lg:w-2/12 h-full bg-black primary-btn"><FaSearch className="mx-auto sm:text-2xl text-sm" /></button>
                    </form>
                </div>
                <div className="flex flex-wrap w-full h-full justify-center items-center">
                    <div className="create-table flex flex-col justify-center items-center w-64 sm:h-44 h-24 bg-white dark:bg-neutral-600 shadow-xl border-2 border-gray-200 dark:border-gray-400 rounded-md m-4 p-3 transition duration-200 transform hover:scale-110">
                        <button className="w-full h-full" onClick={() => setShow(true)}>
                            <FaPlus className="text-4xl text-gray-400 dark:text-gray-100 text-center mx-auto" />
                            <p className="text-gray-400 dark:text-gray-200">Create a new table</p>
                        </button>
                    </div>
                    {
                        filteredTables.length != 0 ? (
                            filteredTables.map(table => (
                                <TableCard key={table.id} tableInfo={table} />
                            ))
                        ) : (
                            null
                        )
                    }
                </div>
                {
                    show && <TableModal show={show} setShow={setShow} />
                }
            </div>
        </>
    )
}

export default Tables