
const TaskCard = (props) => {

    const { id, table_id, title, description, status, date } = props

    const refactorizeBody = (body) => {
        if (body.length > 20) {
            return body.slice(0, 20) + '...'
        } else {
            return body
        }
    }

    return (
        <>
            <div className="task flex flex-col mx-auto justify-center items-center w-10/12 max-w-64 h-20 bg-white shadow-xl border-2 border-gray-200 rounded-md p-1 transition duration-200 transform hover:scale-110">
                <button className="w-full h-full">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <p className="text-gray-400">{refactorizeBody(description)}</p>
                    <small className="text-gray-400 text-center my-auto">{date}</small>
                </button>
            </div>
        </>
    );
};

export default TaskCard;