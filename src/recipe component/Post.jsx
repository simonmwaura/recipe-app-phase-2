import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Post({post}) {




  return (
    <div>

            <Link to={`/blog/${post.id}`} className='border p-5 bg-green-600' key={post.id}><div className='w-40 h-40 object-cover rounded-lg mb-4'>
    <img src={post.images} alt='' className='w-full h-40 object-cover rounded-t-lg' />
  </div><div className='p-6'>
    <h1 className='text-2xl font-bold mb-2'>{post.recipename}</h1>
    <h4 className='font-bold text-lg mb-2'>Ingredients</h4>
    <p className='text-lg mb-4'>{post.listofingredients}</p>
    <h4 className='font-bold text-lg mb-2'>Cooking Instructions</h4>
    <p className='text-lg'>{post.listofcookinginstruction}</p>
  </div>

            </Link>   
    </div>
    
  )
}
