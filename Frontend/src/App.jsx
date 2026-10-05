import Home from "./pages/home.jsx"
import BrowserRouter from "react"

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
