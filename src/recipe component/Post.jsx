import React from 'react'
import { toast } from 'react-toastify'

export default function Post({post,setOndelete}) {

const handleDelete=(id)=>{
  
  fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
  })
  .then((response) =>response.json())
  .then((response) =>{
   setOndelete(id)
    toast.success("Post deleted succesfully")
  })

  
}



  return (
    <div>

<div className='border p-5' key={post.id}>
            <h1 className='text-xl font-semibold'>{post.recipename}</h1>
            <p>{post.ingredients}</p>
            <p>{post.listofingredients}</p>
            <p>{post.cookinginstruction}</p>
            <p>{post.listofcookinginstruction}</p>
            <p>{post.images}</p>
            <div className='bg-green-600 p-4 '>
              <h5>comments  {post.comments.length}</h5>
                {
                  post.comments.map((comment,index)=>(
                    <div className='p-2 bg-white  mt-2' key={index}>
                        <p>{comment.text}</p>
                        <p>{comment.author}</p>

                    </div>
                  ))
                }
            </div>
            <button onClick={()=>handleDelete(post.id)} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
          </div>
    </div>
  )
}
