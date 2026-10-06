import Home from "./pages/home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:year/:category" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
