import React from 'react';

export default function Main() {
  return (
    <>
      <div className='min-h-[550px] sm:min-h-[600px] bg-white flex justify-center items-center text-green-600'>
        <div className='container pb-10 sm:pb-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* Text content section */}
            <div className='order-2 sm:order-1 flex items-center'>
              <div>
                <h1 className='font-serif text-5xl sm:text-6xl lg:text-7xl text-green-600'>
                  Welcome to <span className='text-orange-600 font-extrabold font-sans'>Food Lovers</span>!
                </h1>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl text-green-600 font-serif'>
                  Discover a world of delicious <span className='text-orange-600 font-extrabold font-sans'>recipes</span> right at your fingertips.
                </h2>
                <h2 className='text-xl sm:text-1xl lg:text-3xl text-green-600'>
                  Let's cook up something amazing together!
                </h2>
                
              </div>
            </div>
            {/* Image section */}
            <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
              <img src="./images/pizza.png" alt="" className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
