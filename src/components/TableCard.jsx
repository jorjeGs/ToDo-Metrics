import { Link } from "react-router-dom"

const TableCard = (props) => {

    const { tableInfo } = props

    const { id, title, data } = tableInfo

    //function to refacorize the data if it is too long to fit in the card (max 50 characters, then shortened with '...'))
    const refactorizeData = (data) => {
        if (data.length > 40) {
            return data.slice(0, 40) + '...'
        } else {
            return data
        }
    }

    return (
        <>
            <Link to={ '/home/tables/' + id } className="table-card flex flex-col justify-between items-center w-64 min-h-36 bg-white shadow-xl border-2 border-gray-200 rounded-md m-4 p-3 transition duration-200 transform hover:scale-110">
                <div className="flex flex-col items-center my-auto overflow-hidden h-full gap-3">
                    <h1 className="text-2xl font-bold text-center text-balance text-gray-800">{title}</h1>
                    <p className="text-gray-600 text-center my-auto">{refactorizeData(data)}</p>
                </div>
            </Link>
        </>
    )
}

export default TableCard