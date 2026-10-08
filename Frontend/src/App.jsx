import Home from "./pages/home.jsx"
import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loading from "./pages/loading.jsx"

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:year/:category" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
