import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <>  
            <header>
                <Navbar />
            </header>
            <div className="flex w-full h-full justify-center items-center my-auto mx-auto p-4">
                <h1 className="text-3xl">Home</h1>
            </div>
        </>
    )
}

export default Home