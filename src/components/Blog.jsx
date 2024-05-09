import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function Blog({setOnDelete}) {
  const {id}=useParams()
  const[post,setPost]=useState({})
 const nav=useNavigate()

  useEffect(()=>{
    fetch(`https://recipe-app-phase-2-1.onrender.com/posts/${id}`)
     .then((response) => response.json())
     .then((json) =>{
      setPost(json)
     });
     }, [id])

  
   const handleDelete=(id)=>{
  
    fetch(`https://recipe-app-phase-2-1.onrender.com/posts/${id}`, {
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
                  {post.recipe}
                 </h5>
            
                 <img className="rounded-lg  mx-auto my-4 shadow mb-4 h-[70vh]" src={post.images} alt={post.images} />

                 <p className="text-xl font-semibold mb-2">Ingredients</p>

                 <ul className="list-disc list-inside mb-4">
                  {
                    (()=>{
                      const ingredients=post.ingredients?.split(",")
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
                      const instructions=post.cookinginstruction?.split(".")
                     return instructions && instructions.map(( instruction,index)=>(
                         <li key={index} className="mb-2">{instruction}</li>  
                      ))
                      
                    })()

                  }
                   
                </ol>
     
                 <div className='text-center justify-between '>
                <button onClick={()=>handleDelete(post.id)} type="button" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Delete</button>
                <Link to={`/update/${post.id}`} type="button" className="bg-gray-950 text-white px-4 py-3 rounded-lg hover:bg-gray-800">Update
                </Link>
                </div>    
               </div>
          </div>
     
  </body> 
  
  )
}