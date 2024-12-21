import Login from './pages/Login'
import './App.css'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (<>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/'element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
