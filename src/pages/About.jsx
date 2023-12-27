import WelcomeNavbar from "../components/WelcomeNavbar"

const About = () => {

    return (
        <>
            <header>
                <WelcomeNavbar />
            </header>
            <div className="flex w-full h-full justify-center items-center my-auto mx-auto p-4">
                <h1 className="text-3xl">About</h1>
            </div>
        </>
    )
}

export default About