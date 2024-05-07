import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Blog() {
  const {id}=useParams()
  const[post,setPost]=useState({})
 

 useEffect(()=>{

  fetch(`http://localhost:3000/posts/${id}`)
  .then((response) => response.json())
  .then((data) =>{
    setPost(data)
  } );
},[id])

  
  return (
    <div>
       ID {post.recipename}
    </div>
  )
}
