import React, { useEffect, useState }  from 'react'
import Post from '../recipe component/Post';

export default function Recipe() {
  const[posts,setPosts]=useState([])
  const[onDelete,setOndelete]=useState()

 useEffect(()=>{

  fetch('http://localhost:3000/posts')
  .then((response) => response.json())
  .then((data) =>{
    setPosts(data)
  } );
},[onDelete])

 
  return (
    
    <div>
      <div className='grid md:grid-cols-3  grid-cols-1 gap-6'>

      {
        posts.map((post)=>(
          <Post key={post.id} setOndelete={setOndelete} post={post}/>
        ))
       }

      </div>
    
    </div>
  )
}
