import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Component/Dashboard/Home'
import Dashboard from './Component/Pages/Dashboard'
import Notice from './Component/Pages/Notice'
import Report from './Component/Pages/Report'
import Setting from './Component/Pages/Setting'
import Signin from './Component/Users/Signin'
import Totalexceldata from './Component/Dashboard/Totalexceldata'
import Noticetemplate from './Component/settings/Noticetemplate'
import Createnotice from './Component/settings/Createnotice'
import Resetpass from './Component/Users/Resetpass';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/resetpass' element={<Resetpass />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/report' element={<Report />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/home' element={<Home />} />
          <Route path='/totalexceldata' element={<Totalexceldata />} />
          <Route path='/noticetemplate' element={<Noticetemplate />} />
          <Route path='/createnotice' element={<Createnotice />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App