import React from 'react'
import {BrowerRouter,Routes,Route} from "react-router-dom"
import {Login} from "./Routes.js"
const App = () => {
  return (
    <BrowerRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowerRouter>
  )
}

export default App


