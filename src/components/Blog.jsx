import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Blog({setOnDelete}) {
  const {id}=useParams()
  const[post,setPost]=useState({})
 const nav=useNavigate()

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
       setOnDelete(id)
       nav("/recipe")
      toast.success("Post deleted succesfully")
    })
  
    
  }
  



  return (
  <body className='bg-gray-100'>
      <div className='container mx-auto p-6'>
          <div className="bg-white p-6 rounded-lg shadow-lg">
                  
                 <h5 className="text-2xl font-bold mb-4">
                  {post.recipename}
                 </h5>
            
                 <img className="rounded-lg  mx-auto my-4 shadow mb-4 h-[70vh]" src={post.images} alt={post.images} />

                 <p className="text-xl font-semibold mb-2">Ingredients</p>

                 <ul className="list-disc list-inside mb-4">
                  {
                    (()=>{
                      const ingredients=post.listofingredients?.split(",")
                     return ingredients && ingredients.map(( ingredient,index)=>(
                         <li key={index} className="mb-2">{ingredient}</li>  
                      ))
                      
                    })()

                  }
                   
                </ul>

                <h2 className="text-xl font-semibold mb-2"> Cooking Instructions</h2>
                <ol className="list-decimal list-inside mb-6">
                {
                    (()=>{
                      const instructions=post.listofcookinginstruction?.split(",")
                     return instructions && instructions.map(( instruction,index)=>(
                         <li key={index} className="mb-2">{instruction}</li>  
                      ))
                      
                    })()

                  }
                   <li className="mb-2">{post.listofcookinginstruction}</li> 
                </ol>
     
               <div class="p-5 rounded-lg">
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                      <div className=' p-5 rounded-lg'>
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
                 <div className='text-center'>
                <button onClick={()=>handleDelete(post.id)} type="button" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Delete</button>
                </div>    
               </div>
          </div>
      </div>
  </body>
  
  )
}
