import React, { useEffect, useState }  from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AddRecipes() 
{
  const nav=useNavigate()
const[recipename,setRecipeName]=useState()
const[ingredients,setIngredients]=useState()
const[listofingredients,setListofingredients]=useState()
const[cookinginstruction,setCookinginstructions]=useState()
const[listofcookinginstruction,setListofcookinginstructions]=useState()
const[images,setImages]=useState()
const[comments,setComments]=useState([])




function handleSubmit(e){
     e.preventDefault()

     fetch('http://localhost:3000/posts', {
  method: 'POST',
  body: JSON.stringify({
    recipename:recipename,
    ingredients: ingredients,
    listofingredients: listofingredients,
    cookinginstruction:cookinginstruction,
    listofcookinginstruction:listofcookinginstruction,
    images:images,
    comments:comments
  }),
  headers: {
    'Content-type': 'application/json; ',
  },
})
  .then((response) => response.json())
  .then((res) =>{
    nav("/recipe")
      toast.success("Post saved successfully")
  } );
}

  return (
    <div className='flex  bg-green-900'>
          <div className='w-1/2 p-16 text-white '>
            <img src="./images/uzi.png" alt="image" className='w-full h-full object-cover rounded-lg bg-green-800'/>
          </div>
  <div class='w-1/2 p-4'>
    <h1 className='text-5xl  text-white text-center font-bold pb-16'>Please add your recipe here</h1>
    {/* <!-- Add the rest of your text content here --> */}

    <form class="max-w-md mx-auto " onSubmit={handleSubmit}>
      
  <div class="relative z-0 w-full mb-5 group">
      <input value={recipename} onChange={(e)=>setRecipeName(e.target.value)} type="text" className="justify-center items-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">kindly enter the name of your recipe </label>
  </div>
  
  <div class="relative z-0 w-full mb-5 group">
      <textarea value={listofingredients} onChange={(e)=>setListofingredients(e.target.value)} type="text" className="justify-center items-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>  </textarea>  
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">kindly enter the list of ingredients </label>
  </div>
  
  <div class="relative z-0 w-full mb-5 group">
      <textarea value={listofcookinginstruction} onChange={(e)=>setListofcookinginstructions(e.target.value)} type="text" className="justify-center items-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>  </textarea>  
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">kindly enter the set of cooking instructions </label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <textarea value={images} onChange={(e)=>setImages(e.target.value)} type="text" className="justify-center items-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required></textarea>
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">kindly add the image of the recipe </label>
  </div>
  <button type="Submit" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save post</button>
  </form>
  </div>
   </div>
    

  
  )
}
