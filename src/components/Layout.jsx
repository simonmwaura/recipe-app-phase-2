import React from 'react'
import Navbar from '../Home components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Home components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



export default function Layout() {
  return (
    <div>
        <Navbar/>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
<ToastContainer />
        <Outlet/>
        <Footer/>
    </div>
  )
}
