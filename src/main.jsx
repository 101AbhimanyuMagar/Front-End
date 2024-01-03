import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  </React.StrictMode>,
)
