import './App.css'
import { Route, Routes } from "react-router-dom"
import Create from './views/create/Create.component'
import Detail from './views/detail/Detail.component'
import Home from './views/home/Home.component'
import Landing from './views/landing/Landing.component'


function App() {
  return (
    <div>
        <Routes>
            <Route path= "/" element={<Landing/>}/>
            <Route path= "/home" element={<Home/>} />
            <Route path= "/create" element={<Create/>} />
            <Route path= "/detail/:id" element={<Detail/>} />
        </Routes>
    </div>
  )
}

export default App
