import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar,Home,Top,WatchList } from "./Components"
import GlobleStyle from "./GloblesStyles"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <GlobleStyle/>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/WatchList" element={<WatchList/>}/>
              <Route path="/Top" element={<Top/>}/>
            </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
