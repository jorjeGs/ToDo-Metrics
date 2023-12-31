
const TaskCard = (props) => {

    const { task, setAction, setShow, setTask } = props

    const { title, description, date } = task

    const refactorizeBody = (body) => {
        if (body.length > 10) {
            return body.slice(0, 20) + '...'
        } else {
            return body
        }
    }

    const handleModal = () => {
        setAction('edit')
        setTask(task)
        setShow(true)
    }

    return (
        <>
            <div className="task flex flex-col mx-auto justify-center items-center overflow-hidden w-full sm:max-w-64 h-20 bg-white shadow-xl border-2 border-gray-200 rounded-md p-1 transition duration-200 transform hover:scale-110">
                <button className="w-full h-full" onClick={handleModal}>
                    <h3 className="sm:text-xl text-sm font-bold text-gray-800 overflow-hidden">{title}</h3>
                    <p className="text-gray-400 sm:text-base text-xs overflow-hidden">{refactorizeBody(description)}</p>
                    <small className="text-gray-400 text-center my-auto sm:text-base text-xs overflow-hidden">{date}</small>
                </button>
            </div>
        </>
    );
};

export default TaskCard;