import React, { useEffect, useState }  from 'react'
import Post from '../recipe component/Post';

export default function AddRecipes() 
{
const[posts,setPosts]=useState([])

useEffect(()=>{

  fetch('http://localhost:3000/posts')
  .then((response) => response.json())
  .then((data) =>{
    setPosts(data)
  } );
},[])

// console.log(posts[0].comments[0].text);
  
  return (
    <div>

<div className=' mx-auto p-4 flex flex-wrap bg-green-900'>
        <div className='w-full md:w-1/2 xl:w-1/2 p-4'>
          <img src="./images/uzi.png" alt="image" className='w-full h-full object-cover rounded-lg bg-green-800'/>
        </div>
        <div className='w-full md:w-1/2 xl:w-1/2 p-4 '>
        

        </div>
       



    </div>
    {
        posts.map((post)=>(
          <Post post={post}/>
        ))
       }
    </div>
    

  
  )
}
