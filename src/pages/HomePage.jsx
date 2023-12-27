
const HomePage = () => {
    return (
        <>
            <div className="flex flex-col w-full h-full justify-center items-center my-auto mx-auto p-4 gap-16">
                <h1 className="text-3xl sm:text-6xl">Welcome <strong className="text-blue-500">Jorge</strong>!!</h1>
                <div className="flex sm:flex-row flex-col w-full h-full justify-around items-center my-auto mx-auto p-8 gap-6">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-4xl">Tables</h2>
                        <p className="text-3xl sm:text-6xl"><strong className="text-blue-700">5</strong></p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-4xl">Tasks</h2>
                        <p className="text-3xl sm:text-6xl"><strong className="text-red-700">5</strong></p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-4xl">Done</h2>
                        <p className="text-3xl sm:text-6xl"><strong className="text-green-700">5</strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage