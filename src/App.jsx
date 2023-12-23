import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import NotFound from './pages/NotFound'
import './App.css'

function App() {

  return (
    <main className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
