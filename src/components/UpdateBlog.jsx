import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateBlog() {
  const nav = useNavigate();
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cookinginstruction, setCookingInstruction] = useState('');
  const [images, setImages] = useState('');
 

  const { id } = useParams();

  useEffect(() => {
   
      fetch(`https://recipe-app-phase-2.onrender.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRecipe(data.recipe);
          setIngredients(data.ingredients);
          setCookingInstruction(data.cookinginstruction);
          setImages(data.images);
        })
        .catch((error) => console.error('Error fetching post:', error));
   
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://recipe-app-phase-2.onrender.com/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        recipe:recipe,
        ingredients: ingredients,
        cookinginstruction: cookinginstruction,
        images:images,
       
      }),
      headers: {
        'Content-type': 'application/json; ',
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to update post')
      }
      return response.json()
    })
    .then((data) => {
      nav("/recipe")
      toast.success("Post updated successfully")
    })
    .catch((error) => {
      console.error(error)
      toast.error("Failed to update post")
    })
  }

  return (
    <div className='flex  bg-green-900'>
          <div className='w-1/2 p-16 text-white '>
            <img src="./images/uzi.png" alt="image" className='w-full h-full object-cover rounded-lg bg-green-800'/>
          </div>
  <div class='w-1/2 p-4'>
    <h1 className='text-5xl  text-white text-center font-bold pb-16'>Please update your recipe here </h1>
    {/* <!-- Add the rest of your text content here --> */}

    <form class="max-w-md mx-auto " onSubmit={handleSubmit}>
      
  <div class="relative z-0 w-full mb-5 group">
      <input value={recipe} onChange={(e)=>setRecipe(e.target.value)} type="text" className="justify-center items-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">kindly enter the name of your recipe </label>
  </div>
  
  <div class="relative z-0 w-full mb-5 group">
      <textarea value={ingredients} onChange={(e)=>setIngredients(e.target.value)} type="text" className="justify-center items-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>  </textarea>  
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">kindly enter the list of ingredients </label>
  </div>
  
  <div class="relative z-0 w-full mb-5 group">
      <textarea value={cookinginstruction} onChange={(e)=>setCookingInstruction(e.target.value)} type="text" className="justify-center items-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>  </textarea>  
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">kindly enter the set of cooking instructions </label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <textarea value={images} onChange={(e)=>setImages(e.target.value)} type="text" className="justify-center items-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required></textarea>
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">kindly add the image of the recipe </label>
  </div>
  <button type="Submit" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">update post</button>
  </form>
  </div>
   </div>
    

  
  )
}