import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const Table = () => {
    //get the id from the url
    const id = window.location.href.split('/').pop()

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-full my-auto p-4 gap-6">
                <div className="go-back-btn flex justify-center items-center w-64 h-12 bg-gray-200 shadow-md rounded-full my-auto">
                    <Link to="/home/tables"><FaArrowLeft className="sm:text-4xl text-3xl text-gray-600 my-auto mx-auto" /></Link>
                </div>
                <h1 className="text-center text-3xl font-bold">Table {id}</h1>
                <p className="text-center">We are working on this page, thank you for your support.</p>
            </div>
        </>
    )
}

export default Table