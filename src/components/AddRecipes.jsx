import React, { useState }  from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AddRecipes(){ 
const nav=useNavigate()
const[recipe,setRecipe]=useState('')
const[ingredients,setIngredients]=useState('')
const[cookinginstruction,setCookingInstruction]=useState('')
const[images,setImages]=useState('')
 

function handleSubmit(e){
e.preventDefault()
console.log(recipe,ingredients,cookinginstruction,images);

fetch('https://recipe-app-phase-2-3.onrender.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    recipe: recipe,    
     ingredients: ingredients,   
    cookinginstruction:cookinginstruction,
    images:images
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    nav("/recipe")
    toast.success("post saved successfully")
  });

}

  return (
    <div className='flex flex-col md:flex-row bg-white'>
        <div className='md:w-1/2 p-16 md:p-0 text-center md:text-left text-white'>
            <img src="https://www.stockvault.net/data/2017/01/29/221904/preview16.jpg" alt="image" className='w-full h-full object rounded-lg bg-white '/>
        </div>

       <div className='w-full md:w-1/2 p-4'>
    <h1 className='text-5xl  text-green-700 text-center font-bold pb-16'>Please add your recipe here</h1>
 

    <form onSubmit={handleSubmit} className=' max-w-md mx-auto'>
          <div className='mb-5'>
            <input
              value={recipe}
              onChange={(e) => setRecipe(e.target.value)}
              type='text'
              className='block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm'
              placeholder='kindly enter the name of your recipe'
              required
            />
          </div>

          <div className='mb-5'>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              type='text'
              className='block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm'
              placeholder='kindly enter the list of ingredients'
              required
            />
          </div>

          <div className='mb-5'>
            <textarea
              value={cookinginstruction}
              onChange={(e) => setCookingInstruction(e.target.value)}
              type='text'
              className='block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm'
              placeholder='kindly enter the set of cooking instructions'
              required
            />
          </div>

          <div className='mb-5'>
            <textarea
              value={images}
              onChange={(e) => setImages(e.target.value)}
              type='text'
              className='block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm'
              placeholder='kindly add the image of the recipe'
              required
            />
          </div>

          <button type='submit' className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600'>
            Add post
          </button>
        </form>
  </div>
   </div>
    

  
  )
}