import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import ProtectRoute from './components/ProtectRoute'
import { UserContextProvider } from './context/UserContext'

import './App.css'

function App() {

  return (
    <main className='App dark:bg-neutral-900'>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route element={<ProtectRoute redirectTo='/welcome' />}>
              <Route path='/home/*' element={<Home />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </main>
  )
}

export default App
