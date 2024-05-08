import React, { useEffect, useState }  from 'react'
import Post from '../recipe component/Post';
import ReactPaginate from 'react-paginate';

export default function Recipe({ondelete}) {
  const[posts,setPosts]=useState([])

 useEffect(()=>{

  fetch('http://localhost:3000/posts')
  .then((response) => response.json())
  .then((data) =>{
    setPosts(data)
  } );
},[ondelete])

 

 // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 6;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / 6);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected *6) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };





  
  return (
    
    <div>
     
      <div className='grid md:grid-cols-3  grid-cols-1 gap-6'>

      {
       currentItems && currentItems .map((post)=>(
          <Post  key={post.id} post={post}/>
        ))
       }

      </div>
      <div className='flex flex-row justify-center my-20 bg-sky-200'>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >>"
        containerClassName="flex gap-4"
        activeClassName="text-sky-800 font-bold"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<< previous"
        renderOnZeroPageCount={null}
      />
     </div>
    </div>
  )
}
