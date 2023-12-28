import { useState, useEffect } from "react"
import TableCard from "../components/TableCard"
import TableModal from "../components/TableModal";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPlus, FaSearch } from "react-icons/fa";

const Tables = () => {

    const originalTables = [
        {
            id: 1,
            title: 'Table 1',
            data: 'Pedro pica papas con un pico pica papas pepe pecas papas papas.'
        },
        {
            id: 2,
            title: 'Table 2',
            data: 'Buenas tardes'
        },
    ]

    //this could be restructured to come from a database or context provider (like redux)
    const [tables, setTables] = useState(originalTables)

    const [filteredTables, setFilteredTables] = useState([])

    const [show, setShow] = useState(false)

    useEffect(() => {
        setFilteredTables(tables)
    }, [tables])

    const handleSearch = (e) => {
        e.preventDefault()

        const input = e.target.search
        const value = input.value.toLowerCase()
        const filtered = tables.filter(table => table.title.toLowerCase().includes(value))
        setFilteredTables(filtered)

        //also set to display inline the clear button, wich is outside the form, using not querySelector but getElementById
        document.getElementById('clear').style.display = 'inline'

    }

    const clearSearch = () => {
        setFilteredTables(tables)
        document.querySelector('input[name="search"]').value = ''
        document.getElementById('clear').style.display = 'none'
    }

    return (
        <>
            <div className="flex flex-col w-full h-full justify-center items-center mt-7 mx-auto p-4 gap-4">
                <div className="flex flex-col w-full h-full justify-center items-center text-center gap-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Tables</h1>
                    <p className="text-gray-600 sm:text-2xl"><strong className="text-blue-700">Create</strong> or <strong className="text-green-700">click</strong> an existing table</p>
                </div>
                <div className="search-bar flex flex-row justify-center items-center sm:w-7/12 w-full h-12 bg-white shadow-md rounded-full my-auto">
                    <button className="max-w-2/12 h-full rounded-full text-center mr-1 hidden transition duration-200 ease-in-out" id="clear" name="clear" onClick={clearSearch}><TiDeleteOutline className="sm:text-4xl text-3xl text-red-500 my-auto" /></button>
                    <form className="w-full h-full flex flex-row justify-center my-auto items-center rounded-full" onSubmit={handleSearch} aria-label='Search table Form'>
                        <input type="text" className="w-full h-full outline-none px-2" name="search" id="search" required placeholder="Search by title..." />
                        <button type='submit' className="lg:w-2/12 h-full bg-black primary-btn"><FaSearch className="mx-auto sm:text-2xl text-sm" /></button>
                    </form>
                </div>
                <div className="flex flex-wrap w-full h-full justify-center items-center">
                    <div className="create-table flex flex-col justify-center items-center w-64 sm:h-44 h-24 bg-white shadow-xl border-2 border-gray-200 rounded-md m-4 p-3 transition duration-200 transform hover:scale-110">
                        <button className="w-full h-full" onClick={() => setShow(true)}>
                            <FaPlus className="text-4xl text-gray-400 text-center mx-auto" />
                            <p className="text-gray-400">Create a new table</p>
                        </button>
                    </div>
                    {
                        filteredTables.length != 0 ? (
                            filteredTables.map(table => (
                                <TableCard key={table.id} id={table.id} title={table.title} data={table.data} />
                            ))
                        ) : (
                            <p>No tables found</p>
                        )
                    }
                </div>
                {
                    show && <TableModal show={show} setShow={setShow} setTables={setTables} />
                }
            </div>
        </>
    )
}

export default Tables