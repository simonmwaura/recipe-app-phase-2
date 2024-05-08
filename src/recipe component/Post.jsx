import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Post({post}) {




  return (
    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
          <Link to={`/blog/${post.id}`} className='' key={post.id}><div className='w-20 h-20 object-cover rounded-lg mb-4'>
    
  </div>
  <img src={post.images} alt='' className="w-[400px] mx-auto transform transition duration-300 hover:scale-105 justify-center" />
  <div className='flex flex-col items-center my-3 space-y-2'>
    <h1 className='text-gray-900 poppins text-lg'>{post.recipename}</h1>
    <h4 className='font-bold text-lg mb-2'>Ingredients</h4>
    <p className='text-gray-500 poppins text-sm text-center'>{post.listofingredients}</p>
    <h4 className='font-bold text-lg mb-2'>Cooking Instructions</h4>
    <p className='text-gray-500 poppins text-sm text-center'>{post.listofcookinginstruction}</p>
  </div>

          </Link>   
    </div>
    
  )
}
