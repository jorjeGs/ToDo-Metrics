
const TaskCard = (props) => {

    const { task, setAction, setShow, setTask } = props

    const { title, date } = task

    const handleModal = () => {
        setAction('edit')
        setTask(task)
        setShow(true)
    }

    return (
        <>
            <div className="task flex flex-col mx-auto justify-center items-center overflow-hidden w-full sm:w-11/12 bg-white dark:bg-neutral-300 shadow-xl border-2 border-gray-200 rounded-md p-1 transition duration-200 transform hover:scale-110">
                <button className="w-full h-full" onClick={handleModal}>
                    <h3 className="sm:text-xl text-xs font-bold text-gray-800 dark:text-neutral-700 overflow-hidden whitespace-nowrap text-ellipsis">{title}</h3>
                    <small className="text-gray-400 dark:text-neutral-600 text-center my-auto sm:text-base text-xs overflow-hidden">{date}</small>
                </button>
            </div>
        </>
    );
};

export default TaskCard;