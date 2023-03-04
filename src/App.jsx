import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./Components"
import GlobleStyle from "./GloblesStyles"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <GlobleStyle/>
          <Navbar/>
      
      </BrowserRouter>

    </div>
  )
}

export default App
