import React from 'react'

export default function Main() {
  return (
    <>
    <div className='min-h-[550px] sm:min-h-[600px] bg-orange-600 flex justify-center items-center text-white'> 
          <div className='container pb-10 sm:pb-0'>
               <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content section */}
                <div className='order-2 sm:order-1 flex items-center'  >
                  <div>

                  <h1 className='font-serif text-5xl text-white sm:text-6xl lg:text-7xl ' >Welcome to <span className='text-green-600 font-extrabold font-sans' >PizzaInn</span> !</h1>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  text-white font-serif'f> Discover a world of delicious <span  className='text-green-600 font-extrabold font-sans'> pizza </span>recipes right at your fingertips. </h2>
                   <h2  className='text-xl sm:text-1xl lg:text-3xl  text-white '> Let's cook up something amazing together!</h2>
                   <div>
                   <button type="button" class="text-green-600 bg-orange-600 hover:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 font-sans">Pizza and inshallah</button>

                  </div>
                   
                   </div>
                </div>
                {/* image section */}
                <div className='min-h-[450px] flex justify-center items-center order-1 sm;order-2 relative'>
                  <img src="./images/pizza.png" alt="" className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto ' />
                </div>
               </div>
         </div>
    </div>

   
    
    </>
  )
}


