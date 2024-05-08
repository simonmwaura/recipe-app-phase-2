import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Post({post}) {




  return (
    <div>

<Link to={`/blog/${post.id}`} className='border p-5 bg-green-600' key={post.id}>
<div>
        <img class="rounded-t-lg h-[50vh] w-full" src="https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
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
