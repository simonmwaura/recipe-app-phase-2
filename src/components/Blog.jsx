import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Blog() {
  const {id}=useParams()
  const[post,setPost]=useState({})
 

  useEffect(()=>{
    fetch(`http://localhost:3000/posts/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
       setPost(data)
    })
  }, [id])


  const handleDelete=(id)=>{
  
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
    })
    .then((response) =>response.json())
    .then((response) =>{
    
      toast.success("Post deleted succesfully")
    })
  
    
  }
  



  return (
    <div className='flex justify-center'>
     

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
        <img class="rounded-t-lg h-[50vh] w-full" src="https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>


    <button onClick={()=>handleDelete(post.id)} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.recipename}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.ingredients}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.listofingredients}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.cookinginstruction}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.listofcookinginstruction}</p>
        <div className='bg-green-600 p-4 '>
              <h5>comments  {post && post.comments && post.comments.length}</h5>
                {
                 post && post.comments && post.comments.map((comment,index)=>(
                    <div className='p-2 bg-white  mt-2' key={index}>
                        <p>{comment.text}</p>
                        <p>{comment.author}</p>

                    </div>
                  ))
                }
            </div>
       
    </div>
</div>



    </div>
  )
}
