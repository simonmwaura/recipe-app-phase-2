import React, { useEffect, useState }  from 'react'
import Post from '../recipe component/Post';

export default function Recipe() {
  const[posts,setPosts]=useState([])

 useEffect(()=>{

  fetch('http://localhost:3000/posts')
  .then((response) => response.json())
  .then((data) =>{
    setPosts(data)
  } );
},[])

 

 // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / postsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };





  
  return (
    
    <div>
      <h1>simon</h1>
      <div className='grid md:grid-cols-3  grid-cols-1 gap-6'>

      {
       currentItems && currentItems .map((post)=>(
          <Post  key={post.id} post={post}/>
        ))
       }

      </div>
    
    </div>
  )
}
