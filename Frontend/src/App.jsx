import Home from "./pages/home.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loading from "./pages/loading.jsx"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/year/:yearId/category/:categoryId" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
