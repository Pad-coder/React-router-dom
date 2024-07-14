import React from 'react'
import NavBar from './components/NavBar' 
import Fsd from './components/Fsd'
import DataScience from './components/Ds'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import All from './components/All'
import Cs from './components/Cs'
import Career from './components/Career'
function App() {
  return<>
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path='/' element={<All />} />
    <Route path="/Full-stack-development" element={<Fsd />} />
    <Route path="/Data-science" element={<DataScience />} />
    <Route path='/Cyber-security' element={<Cs />}/>
    <Route path='/Career' element={<Career />}/>
    <Route path='*' element={<Navigate to='/' />}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App