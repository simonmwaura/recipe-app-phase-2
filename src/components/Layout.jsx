import React from 'react'
import Navbar from '../Home components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Home components/Footer'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
