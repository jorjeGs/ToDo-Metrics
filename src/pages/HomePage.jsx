import useUser from "../hooks/useUser"

const HomePage = () => {

    const { user, userTables, handleTheme, theme } = useUser()

    //get the total number of tasks from the user tables
    const userTasks = userTables.map(table => table.tasks).flat()


    //get the number of tasks done from the user tables
    const userTasksDone = userTasks.filter(task => task.status == 'done')

    return (
        <>
            <div className="flex flex-col w-full h-full justify-center items-center my-auto mx-auto p-4 gap-16 dark:text-white">
                <h1 className="text-4xl sm:text-6xl">Welcome <strong className="text-blue-500">{user.name}</strong>!!</h1>
                <div className="flex sm:flex-row flex-col w-full h-full justify-around items-center my-auto mx-auto p-8 gap-6">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl">Tables</h2>
                        <p className="text-4xl sm:text-6xl"><strong className="text-blue-700">{userTables.length}</strong></p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl">Tasks</h2>
                        <p className="text-4xl sm:text-6xl"><strong className="text-red-700">{userTasks.length}</strong></p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl">Done</h2>
                        <p className="text-4xl sm:text-6xl"><strong className="text-green-700">{userTasksDone.length == 0 ? 0 : ( userTasks.filter(task => task.status == 'done').length )}</strong></p>
                    </div>
                </div>
                {/* Button to change theme (dark or light), this button will have a position absolute to outcome for the main content */}
                <button className="primary-btn absolute bottom-0 m-4 p-2 rounded-full dark:bg-white dark:hover:bg-black dark:text-black dark:hover:text-white" onClick={() => handleTheme()}>
                    Try {
                        theme === "dark" ? "Light" : "Dark"
                    } Mode
                </button>
            </div>
        </>
    )
}

export default HomePage