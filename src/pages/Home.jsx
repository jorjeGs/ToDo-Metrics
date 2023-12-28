import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import NotFound from "./NotFound"
import Tables from "./Tables"
import Metrics from "./Metrics"
import About from "./About"
import HomePage from "./HomePage"
import Table from "./Table"

const Home = () => {
    return (
        <>  
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/tables/:id" element={<Table />} />
                <Route path="/metrics" element={<Metrics />} />
                <Route path="/about" element={<About />} /> 
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default Home