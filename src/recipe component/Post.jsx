import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Post({post}) {




  return (
    <div>

<Link to={`/blog/${post.id}`} className='border p-5' key={post.id}>
            <h1 className='text-xl font-semibold'>{post.recipename}</h1>
            <h4 className='font-extrabold text-2xl '>ingredients</h4>
            <p>{post.listofingredients}</p>
            <h4 className='font-extrabold text-2xl'>cookinginstruction</h4>
            <p>{post.listofcookinginstruction}</p>
            <p>{post.images}</p>

          </Link>
    </div>
  )
}
