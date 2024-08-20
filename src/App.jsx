import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage'
import Card from './Components/Card'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/businesscard' element={<Card />} />
        <Route path='/' element={<Homepage />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
