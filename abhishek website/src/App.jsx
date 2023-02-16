import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Aboutus from './component/Aboutus'
import Home from './component/Home'
import Newsroom from './component/Newsroom'
import Nvbar from './component/Nvbar'
import Products from './component/Products'
import Prtner from './component/Prtner'

const App = () => {
  return (
    <div>
      <Router>
        <Nvbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/partner" element={<Prtner/>}/>
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/newsroom" element={<Newsroom/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App