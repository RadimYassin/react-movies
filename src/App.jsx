import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar,Home,Top,WatchList } from "./Components"
import GlobleStyle from "./GloblesStyles"
import { store } from "./Redux/store"

function App() {
  return (
    <Provider store={store} >

   <BrowserRouter>
            <GlobleStyle/>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/WatchList" element={<WatchList/>}/>
              <Route path="/Top" element={<Top/>}/>
            </Routes>
      </BrowserRouter>

    </Provider>
   

 
  )
}

export default App
