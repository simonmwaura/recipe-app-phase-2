import react from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Recipe from './components/Recipe'
import AddRecipes from './components/AddRecipes';
import Contactus from './components/Contactus';
import Layout from './components/Layout';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />
      <Route path="/recipe" element={<Recipe/>} />
      <Route path="/addrecipes" element={<AddRecipes/>} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path='/blog' element={}></Route>

        </Route>
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
